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
          <v-tab-item v-for="(item, i) in therapies" :key="i">
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
      title: 'Terápiás kezelések',
      therapies: [
        {
          title: 'BEMER® terápia',
          text: 'A BEMER fizikai érterápia javítja a mikrokeringést, támogatja a legkisebb véredények vérkeringését. Ezáltal a test sejtjeinek teljesítőképessége javul, ami hozzájárul a fájdalom csillapításához és a szervezet öngyógyító képességének növeléséhez. Az ép mikrokeringés támogatja az immunrendszert és megvéd a betegségektől. A fizikai érterápia rendszeres alkalmazása esetén hatékonyan véd a betegségekkel és az egészségügyi problémákkal szemben, támogatja a szervezet öngyógyító és regenerációs folyamatait. A BEMER készülékek javítják a kicsi és nagyon kicsi véredények továbbító mozgásait. Ez a szükségletnek megfelelő véreloszláshoz vezet a legkisebb véredények hálózatában. Ezért a BEMER hatékony terápiás opció számos betegség és egészségügyi probléma esetén. A mikrokeringés is az élet alapvető törvényeit követi és az életkorral együtt gyengül. Ezt a folyamatot azonban sok embernél felgyorsítják a káros környezeti hatások, a rossz szokások és az egészségtelen életvitel. A környezetünkben megtalálható méreganyagok, a zaj, a stressz, az alvás- és mozgáshiány, az egészségtelen vagy egyoldalú táplálkozás, a nikotin- és alkoholfogyasztás kedvezőtlenül befolyásolja a mikrokeringést.',
        },
        {
          title: 'LPG Lipomassage',
          text: 'Ezáltal a test sejtjeinek teljesítőképessége javul, ami hozzájárul a fájdalom csillapításához és a szervezet öngyógyító képességének növeléséhez. Az ép mikrokeringés támogatja az immunrendszert és megvéd a betegségektől.',
        },
        {
          title: 'Cardio Lounge',
          text: 'Az ép mikrokeringés támogatja az immunrendszert és megvéd a betegségektől. A fizikai érterápia rendszeres alkalmazás esetén hatékonyan véd a betegségekkel és az egészségügyi problémákkal szemben és támogatja a szervezet öngyógyító és regenerációs folyamatait.',
        },
        {
          title: 'Energetikai kezelések',
          text: 'A fizikai érterápia javítja a mikrokeringést, támogatja a legkisebb véredények vérkeringését. Ezáltal a test sejtjeinek teljesítőképessége javul, ami hozzájárul a fájdalom csillapításához és a szervezet öngyógyító képességének növeléséhez',
        },
      ],

      icons: [
        {
          title: 'BEMER® terápia',
          icon: 'grain',
        },
        {
          title: 'LPG Lipomassage',
          icon: 'state-machine',
        },
        {
          title: 'Cardio Lounge',
          icon: 'meditation',
        },
        {
          title: 'Energetikai kezelések',
          icon: 'asterisk',
        },
      ],
    };
  },
};
</script>

<style>
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
