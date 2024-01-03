<template>
  <div class="card">
    <div class="card-image">
      <img :src="img" alt="Card Image" />
    </div>
    <div class="card-details">
      <h1>{{ title }}</h1>
      <p class="card-details__subtitle">{{ subtitle }}</p>
      <p class="card-details__note">{{ note }}</p>
    </div>
  </div>
</template>
    
    <script>
export default {
  props: {
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
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
  },
};
</script>
    
  <style scoped>
.card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-image {
  width: 70px; /* Adjust the width and height as needed */
  height: 70px;
  border-radius: 50%;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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
  font-size: 14px;
}

.card-details__note {
  color: #999;
}
</style>