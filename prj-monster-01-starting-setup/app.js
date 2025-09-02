function getRandomValue(min, max) {
  if (max < min) {
    throw new Error("Min should be less than max");
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

function logEvent(who, what, value) {
  return who + " " + what + " " + value;
}
const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      gameOver: false,
      winner: null,
      specialAttackNumber: 2,
      healthPotNumber: 2,
      logs: [],
    };
  },

  computed: {
    monsterHealthComputed() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthComputed() {
      return { width: this.playerHealth + "%" };
    },
  },
  watch: {
    winner(newVal) {
      if (newVal) {
        if (newVal !== "No one") {
          this.logs.unshift(logEvent(newVal, "wins!", ""));
        } else {
          this.logs.unshift(logEvent("both die in battle", "", ""));
        }
      }
    },
    monsterHealth(newVal) {
      if (newVal <= 0 && this.playerHealth <= 0) {
        // draw
        this.winner = "No one";
        this.monsterHealth = 0;
        this.playerHealth = 0;
      } else if (newVal <= 0) {
        // player wins
        this.winner = "Player";
        this.monsterHealth = 0;
      }
    },
    playerHealth(newVal) {
      if (newVal <= 0 && this.monsterHealth <= 0) {
        // draw
        this.winner = "No one";
        this.monsterHealth = 0;
        this.playerHealth = 0;
      }
      if (newVal <= 0) {
        // monster wins
        this.winner = "Monster";
        this.playerHealth = 0;
      }
      if (newVal > 100) {
        this.playerHealth = 100;
      }
    },
  },

  methods: {
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.specialAttackNumber = 2;
      this.healthPotNumber = 2;
      this.logs = [];
    },
    attackMonster() {
      if (this.winner) {
        return;
      }
      console.log("Attack!");

      const monsterDamage = getRandomValue(8, 12);
      const playerDamage = getRandomValue(5, 12);

      this.monsterHealth -= playerDamage;
      this.logs.unshift(
        logEvent(
          `Player hits Monster by ${playerDamage}`,
          `, Monster hit back with ${monsterDamage}`,
          "",
        ),
      );

      if (this.monsterHealth <= 0) {
        this.winner = "Player";
        this.monsterHealth = 0;
        return;
      }
      this.playerHealth -= monsterDamage;
      if (this.playerHealth <= 0) {
        this.winner = "Monster";
        this.playerHealth = 0;
      }
    },
    specialAttackMonster() {
      console.log("Special Attack!");
      if (this.specialAttackNumber <= 0) {
        return;
      }
      const monsterDamage = getRandomValue(0, 15);
      this.logs.unshift(
        logEvent("Special Attack!", "monster is damaged by", monsterDamage),
      );
      this.monsterHealth -= monsterDamage;

      this.specialAttackNumber--;
    },
    healPlayer() {
      if (this.healthPotNumber <= 0) {
        return;
      }
      console.log("Heal!");
      this.healthPotNumber--;

      const healPlayer = getRandomValue(5, 12);
      this.logs.unshift(logEvent("Glup ...Player heals by", healPlayer, ""));
      if (this.playerHealth + healPlayer > 100) {
        this.playerHealth = 100;
        return;
      }

      this.playerHealth += healPlayer;
    },
    surrender() {
      console.log("Surrender!");
      this.logs.unshift(logEvent("Player", "surrenders", ""));
      this.winner = "Monster";
    },
  },
}).mount("#game");
