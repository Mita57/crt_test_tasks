<template>
  <div id="flats_registry">
    <flatCard v-for="flat in flats" :key="flat.id" :flat="flat"/>
  </div>
</template>

<script>
import flatCard from "./flatCard";

export default {
  name: "flatsRegistry",
  components: {flatCard},
  data() {
    return {
      flats: this.$store.getters['getFlats']
    }
  }
}
</script>

<style scoped>
#flats_registry {
  font-family: 'Roboto', sans-serif;
  width: 75%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
