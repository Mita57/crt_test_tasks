<template>
  <div id="leaderBoard">
    <h2>Таблица результатов</h2>
    <p v-for="score in hiScores">
      {{ score.name }}: {{ score.time }} сек., {{score.opened}} открытых пар
    </p>
    <button @click="clearLeaderBoard">Clear leaderboard</button>
  </div>
</template>

<script>
import {store} from "../store/store";

export default {
  name: "leaderBoard",
  computed: {
    hiScores: () => {
      return store.getters['getHighScores']
    }
  },
  methods: {
    clearLeaderBoard() {
      this.$store.dispatch('clearScores');
      this.$store.commit('clearScores');
    }
  }
}
</script>

<style scoped>
  #leaderBoard {
    margin-top: 32px;
    padding: 16px;
  }

  h2 {
    text-align: center;
  }
</style>
