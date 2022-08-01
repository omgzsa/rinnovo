<template>
  <v-container>
    <div class="massage-wrapper px-sm-6">
      <h1 class="text-h4 text-sm-h3">{{ title }}</h1>

      <v-row class="py-16">
        <v-tabs vertical slider-color="primary">
          <v-tab
            v-for="(icon, i) in icons"
            :key="i"
            class="align-center justify-start"
          >
            <v-icon left>mdi-{{ icon.icon }}</v-icon>
            <span class="text-h6 d-md-none d-md-flex d-none">{{
              icon.title
            }}</span>
          </v-tab>
          <v-tab-item
            v-for="(item, i) in therapies"
            :key="i"
            transition="slide-y-transition"
            hide-on-leave="true"
            mode="in"
          >
            <v-card flat>
              <v-card-title>
                <h2 class="text-h5">{{ item.title }}</h2>
              </v-card-title>
              <v-card-text>
                <p class="body-2 text-sm-body-1">
                  {{ item.text }}
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Masszázs terápia',
      therapies: [
        {
          title: 'Shiatsu masszázs',
          text: 'Ezáltal a test sejtjeinek teljesítőképessége javul, ami hozzájárul a fájdalom csillapításához és a szervezet öngyógyító képességének növeléséhez. Az ép mikrokeringés támogatja az immunrendszert és megvéd a betegségektől.',
        },
        {
          title: 'Frissítő és relaxáló masszázsok',
          text: 'Az ép mikrokeringés támogatja az immunrendszert és megvéd a betegségektől. A fizikai érterápia rendszeres alkalmazás esetén hatékonyan véd a betegségekkel és az egészségügyi problémákkal szemben és támogatja a szervezet öngyógyító és regenerációs folyamatait.',
        },
        {
          title: 'Thai labdacs masszázs',
          text: 'A BEMER fizikai érterápia javítja a mikrokeringést, támogatja a legkisebb véredények vérkeringését. Ezáltal a test sejtjeinek teljesítőképessége javul, ami hozzájárul a fájdalom csillapításához és a szervezet öngyógyító képességének növeléséhez',
        },
        {
          title: 'Bambusz masszázs',
          text: 'A fizikai érterápia rendszeres alkalmazás esetén hatékonyan véd a betegségekkel és az egészségügyi problémákkal szemben és támogatja a szervezet öngyógyító és regenerációs folyamatait. A BEMER készülékek javítják a kicsi és nagyon kicsi véredények továbbító mozgásait.',
        },
      ],

      icons: [
        {
          title: 'Shiatsu masszázs',
          icon: 'state-machine',
        },
        {
          title: 'Frissítő és relaxáló masszázsok',
          icon: 'meditation',
        },
        {
          title: 'Thai labdacs masszázs',
          icon: 'atom-variant',
        },
        {
          title: 'Bambusz masszázs',
          icon: 'sprout',
        },
      ],
    };
  },
};
</script>

<style>
.massage-wrapper {
  max-width: 80em;
  margin-inline: auto;
  /* padding-inline: 2em; */
  margin-top: 6em;
}

.v-tab {
  text-transform: none !important;
  min-width: 50px !important;
}

@media (max-width: 600px) {
  .v-tab {
    padding-right: 0 !important;
  }
}
</style>
