<template>
  <div class="education-card">
    <div class="education-card-image">
      <img :src="img" alt="Education Image" />
    </div>
    <div class="education-card-details">
      <h1>
        <span class="education-card-details__college">{{ college }}, </span> 
        <span class="education-card-details__country">{{ country }} &mdash; </span>
        <span class="education-card-details__degree">{{ degree }}</span>
      </h1>
      <p class="date">{{ date }}</p>
      <p class="note">{{ note }}</p>
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
    country: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    date: {
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
.education-card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.education-card-image {
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

.education-card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.education-card-details {
  flex: 1;
}

.education-card-details__college {
  font-weight: bold;
}

.education-card-details__country {
  font-weight: normal;
}

.education-card-details__degree {
  font-style: italic;
  font-weight: normal;
}

.education-card h1 {
  margin: 5px 0;
  font-size: 16px;
}

.education-card p {
  margin: 0;
  font-size: 14px;
}
</style>