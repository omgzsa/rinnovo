<template>
  <v-row class="d-flex" justify="space-around">
    <div
      class="features-card pa-1 mb-4 mr-2"
      v-for="(feature, index) in features"
      :key="index"
    >
      <span
        ><v-icon color="secondary" right x-large class="mt-4"
          >mdi-{{ feature.icon }}</v-icon
        ></span
      >
      <v-card-title class="text-h5">{{ feature.title }}</v-card-title>
      <v-card-text class="body-2 text-sm-body-1">{{
        feature.description
      }}</v-card-text>
    </div>
  </v-row>
</template>

<script>
export default {
  props: ['features'],
};
</script>

<style>
.features-card {
  max-width: 24em;
}
</style>
