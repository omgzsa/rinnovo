<template>
  <v-fab-transition>
    <v-btn
      color="red darken-3"
      fab
      fixed
      bottom
      left
      v-show="showFab"
      @click="$vuetify.goTo('#app', { duration: 500, offset: 0 })"
    >
      <v-icon> mdi-arrow-up </v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'ButtonToTop',
  data() {
    return {
      offsetTop: 0,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
