<template>
  <v-container px-0 fluid class="relative" py-16>
    <div class="contact-wrapper">
      <h2 class="text-h3 mb-8">Kapcsolat</h2>
      <v-row class="mx-auto" justify="center">
        <v-col tag="ul" sm="5" offset-sm="2">
          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon color="secondary" left>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="">{{
                contact.fullName
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ contact.telNum }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon color="secondary" left>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="">{{
                contact.email
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item tag="li">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon color="secondary" left>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ contact.city }}</v-list-item-title>
              <v-list-item-subtitle>{{ contact.street }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col sm="5">
          <v-img>MAP IMAGE</v-img>
        </v-col>
      </v-row>
    </div>
    <v-img src="@/assets/plants.png" alt="" class="plants d-none" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        fullName: 'Pozsgai Éva',
        telNum: '+36 70 866 7424',
        email: 'pozsgaieva@rinnovo.hu',
        city: '9027 Győr',
        street: 'Puskás Tivadar u. 8.',
      },
    };
  },
};
</script>

<style>
.contact-wrapper {
  /* padding-block: 6em; */
  padding-inline: 2em;
  max-width: 80em;
  margin-inline: auto;
}

.relative {
  position: relative;
  z-index: 1;
}

.plants {
  position: absolute;
  bottom: 0;
  left: 0;

  z-index: -1;
  width: 200px;
  max-width: 100%;
}
</style>
