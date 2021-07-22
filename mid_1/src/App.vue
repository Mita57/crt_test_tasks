<template>
  <div id="content">
    <card-grid/>
    <leader-board/>
  </div>
</template>

<script>
import CardGrid from "./components/cardGrid";
import LeaderBoard from "./components/leaderBoard";

export default {
  components: {LeaderBoard, CardGrid}
}
</script>

<style scoped>
  #content {
    font-family: 'Roboto', sans-serif;
    width: 700px;
    margin: auto;
    border-right: black 1px solid;
    border-left: black 1px solid;
  }
</style>
