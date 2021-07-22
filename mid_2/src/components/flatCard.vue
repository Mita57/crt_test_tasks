<template>
  <div class="flat_card">
    <h3>{{ flat.attributes.title }}</h3>
    <img class="flat_card_img" :src="flat.attributes.img">
    <p>Комнат: {{ flat.attributes.rooms }}</p>
    <p>Площадь: {{ flat.attributes.area }} {{ flat.attributes.unit }}</p>
    <p class="flat_card_address">Адрес: {{ getAddress(flat.attributes.address) }}</p>
    <div class="flat_card_buttons">
      <button :class="liked? 'flat_card_buttons_like flat_card_buttons_liked':
       'flat_card_buttons_like'" @click="likeClickHandler">
        <img src="https://www.seekpng.com/png/full/20-209672_facebook-like-logo-black-png-facebook-like-icon.png">
      </button>
      <button class="flat_card_buttons_owner" @click="showOwnerClick">
        Показать контакт
      </button>
    </div>
    <div class="flat_card_owner" v-if="showOwner">
      {{ getContact(flat.relationships.attributes) }}
    </div>
  </div>
</template>

<script>

export default {
  name: "flatCard",
  props: ['flat'],
  data() {
    return {
      liked: false,
      showOwner: false
    }
  },
  methods: {
    getAddress(flat) {
      return `${flat.street} ${flat.house}, кв ${flat.room}`;
    },
    likeClickHandler() {
      this.liked = !this.liked;
      this.$emit('likeClick', this.flat.id, this.liked);
    },
    getContact(owner) {
      return `${owner.first_name} ${owner.last_name} ${owner.middle_name}`;
    },
    showOwnerClick() {
      this.showOwner = !this.showOwner;
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 4px;
  height: 44px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

p {
  margin: 6px;
}

.flat_card_buttons {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}

.flat_card_buttons_like {
  border-radius: 50%;
  height: 32px;
  width: 32px;
}

.flat_card_buttons_liked {
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background-color: #ff5968;
}

.flat_card_buttons_liked:hover {
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background-color: #ff7b87;
}

.flat_card_owner {
  position: absolute;
  width: 194px;
  padding: 4px;
  margin-top: 4px;
  background-color: #ddd;
}

.flat_card_buttons_like img {
  height: 20px;
  width: 20px;
}

button {
  border: none;
  cursor: pointer;
  background-color: #ddd;
  transition: 0.2s;
}

button:hover {
  border: none;
  cursor: pointer;
  background-color: #eee;
}

.flat_card {
  width: 200px;
  border: #aaaaaa solid;
  margin: 4px;
}

.flat_card_img {
  object-fit: cover;
  height: 200px;
  width: 200px;
}

.flat_card_address {
  margin: 4px;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
