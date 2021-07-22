<template>
  <div :class="!card.cleared ? 'card_not_cleared card': 'card'" @click="cardClicked">
    <img :src="card.img" v-if="card.selected || card.cleared">
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/573px-Green-checkmark.svg.png'
         v-if="card.cleared" style="position: absolute">
  </div>
</template>

<script>
export default {
  name: "card",
  props: ['card'],
  methods: {
    cardClicked() {
      this.$emit('cardClicked', this.card.key);
    }
  },
}
</script>

<style scoped>
  .card {
    width: 80px;
    height: 80px;
    background-color: #aaa;
    border-radius: 8px;
    margin: 2px;
    display: flex;
    justify-content: center;
  }

  .card_not_cleared:hover {
    background-color: #bbb;
  }

  img {
    height: 75px;
    width: 75px;
  }
</style>
