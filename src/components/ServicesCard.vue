<template>
  <v-row class="mx-auto">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="service-card mb-8"
    >
      <v-col md="6">
        <v-img :src="require('../assets/' + service.image)" aspect-ratio="2" />
      </v-col>
      <v-col
        md="5"
        align-self="center"
        class="service-card-content mx-auto px-4"
      >
        <v-img
          :src="require('../assets/' + service.icon)"
          class="service-card-icon"
        />
        <h3 class="text-h4 text-sm-h3 mb-4">{{ service.title }}</h3>
        <p class="body-2 text-sm-body-1">{{ service.text }}</p>
        <v-btn small rounded color="brown" :to="service.path"
          ><span class="white--text">Megnézem a kezelést!</span>
          <v-icon right color="white">mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'ServicesCard',
  props: ['services'],
};
</script>

<style>
.service-card:nth-child(2n) {
  flex-direction: row-reverse;
}

@media (min-width: 45em) {
  .service-card {
    display: flex;
  }
}

.service-card-content {
  position: relative;
}

.service-card-icon {
  position: absolute;
  top: -1.25em;
  left: 0;
}
</style>
