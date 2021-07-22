<template>
  <div class="game">
    <card v-for="card in cards" :key="card.key" v-on:cardClicked="cardClickedHandler" :card="card" />
    <div v-if="!gameFinished" class="game_stats">
      <div>Прошло времени: {{timeElapsed / 10}}</div> <div>Перевернуто пар: {{this.openedPairs}}</div>
    </div>
    <div class="game_hiScoreEnter" v-if="gameFinished">
      Итоговое время: {{this.timeElapsed / 10}}
      <p>Ваше имя: <input type="text" oninput="" v-model="userName">
        <button :disabled="!userName" @click="this.submitScore">Добавить результат</button></p>
    </div>
  </div>
</template>

<script>
import Card from "./card";
import teams from "../util/picUrls";
export default {
  name: "cardGrid",
  components: {Card},
  data() {
    return {
      cards: [],
      pairsLeft: 18,
      openedCardA: null,
      openedCardAIndex: null,
      openedCardB: null,
      openedPairs: 0,
      timeElapsed: 0,
      userName: '',
      timeInterval: null,
      gameFinished: false
    }
  },
  mounted() {
    let i = 0;
    for (const img in teams) {
      this.cards.push({
        key: i,
        img: teams[img],
        selected: false,
        cleared: false
      });
      i++;
      this.cards.push({
        key: i,
        img: teams[img],
        selected: false,
        cleared: false
      });
      i++;
    }
    this.cards = this.cards.sort( () => Math.random() - 0.5);
  },
  methods: {
    hideCard(index) {
      this.cards[index].selected = false;
    },
    submitScore() {
      this.$store.commit('addRes', {name: this.userName, time: this.timeElapsed / 10,
      opened: this.openedPairs});
    },
    cardClickedHandler(key) {
      // begin the game on the first click
      if (this.timeElapsed === 0) {
        this.timeInterval = setInterval(() => {
          this.timeElapsed += 1;
        }, 100);
      }

      const index = this.cards.findIndex(((obj) => obj.key === key));
      this.cards[index].selected = !this.cards[index].selected;
      if (!this.openedCardA && this.cards[index].selected) {
        this.openedCardA = this.cards[index].img;
        this.openedCardAIndex = index;
        return;
      } else if (!this.cards[index].selected) {
        this.openedCardA = null;
        this.openedCardAIndex = null;
        return;
      }
      if (!this.openedCardB) {
        this.openedCardB = this.cards[index].img;
      }
      if (this.openedCardA === this.openedCardB) {
        this.cards[this.openedCardAIndex].cleared = true;
        this.cards[index].cleared = true;
        this.pairsLeft--;

        if (this.pairsLeft === 0) {
          clearInterval(this.timeInterval);
          this.gameFinished = true;
        }
      }
      this.openedPairs++;
      setTimeout(this.hideCard, 200, this.openedCardAIndex);
      setTimeout(this.hideCard, 200, index);
      this.openedCardA = null;
      this.openedCardAIndex = null;
      this.openedCardB = null;
    }
  }
}
</script>

<style scoped>
  .game {
    display: flex;
    margin: auto;
    width: 510px;
    height: 510px;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .game_stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: space-between;
    width: 100%;
    margin-top: 8px;
  }

  .game_hiScoreEnter {
    margin-top: 8px;
  }
</style>
