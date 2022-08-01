<template>
  <v-container fluid class="hero">
    <v-row class="hero-wrapper">
      <v-col sm="8" md="6" lg="5" offset-lg="" class="hero-content">
        <span class="white--text caption text-sm-body-2"
          >Nem igaz az, hogy a szépségért meg kell szenvedni!</span
        >
        <h1 class="white--text text-h4 text-sm-h3 text-md-h2 mt-4 mb-6">
          Alakformálás és masszázs terápia az egészséges testért
        </h1>
        <v-btn small rounded color="brown" to="#szolgaltatasok"
          ><span class="white--text">Nézd meg a szolgáltatásaimat!</span></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Hero',

  data: () => ({}),
};
</script>

<style>
.hero {
  background: url(../assets/hero-xl.jpg) no-repeat top;
  background-position: 65%;
  background-size: cover;

  padding-top: clamp(6rem, 11vw, 12rem);
  padding-bottom: clamp(4rem, 11vw, 12rem);
}

.hero-wrapper {
  padding-left: 1em;
  margin-inline: auto;
  max-width: 80rem;
}
</style>
