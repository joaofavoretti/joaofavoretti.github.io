<template>
  <ColorScheme>
    <a :href="link" target="_blank">
      <div :class="['card', colorMode.value === 'light' ? 'card__light' : 'card__dark']">
        <div class="card-image">
          <img :src="img" alt="Card Image" />
        </div>
        <div class="card-details">
          <h1>{{ title }}</h1>
          <p class="card-details__subtitle">{{ subtitle }}</p>
          <p class="card-details__note">{{ note }}</p>
        </div>
      </div>
    </a>
  </ColorScheme>
</template>
      
<script setup>
const colorMode = useColorMode();

defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>
      
<style scoped>
.card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #e5e7eb34;
}

.card__dark {
  background-color: rgb(39, 46, 59);
}

.card__light {
  background-color: rgb(249, 249, 250);
}

.card-image {
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
}

.card-details {
  flex: 1;
}

.card h1 {
  margin: 5px 0;
  font-size: 16px;
}

.card p {
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1;
}

.card-details__note {
  color: #999;
}
</style>