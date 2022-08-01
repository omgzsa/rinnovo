<template>
  <v-container pa-0 fluid>
    <div class="services-wrapper mx-auto">
      <ServicesCard :services="services" />
    </div>
  </v-container>
</template>

<script>
import ServicesCard from './ServicesCard.vue';

export default {
  components: {
    ServicesCard,
  },
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Masszázs terápia',
          text: 'Kezeléseim alkalmasak betegségek kezelésére, az öngyógyító képességünk aktiválására. Bizonyos masszázsok hatással vannak a bőrre, a szövetekre, a keringésre, a nyirokrendszerre is. Kezelhetünk vele izomfájdalmat, gyulladást, de alkalmazhatjuk a testi és lelki feszültségek oldására, fejfájás és nyaki fájdalmak kezelésére, felfrissülésre, relaxálásra. Stimulálja az idegrendszert, nyugtatja az idegeket.',
          image: 'alakformalas.png',
          icon: 'harmonia.svg',
          path: '/masszazs',
        },
        {
          title: 'Alakformálás és testkezelés',
          text: 'A kezelések alkalmasak minden nőnek és férfinak aki változni, fogyni, karcsúsodni szeretne. Elmúltak azok az idők, amikor a zavaró zsírpárnák eltüntetése érdekében orvosi kés alá kellett feküdni. Ma már létezik a technológia, amellyel hatékonyan szabadulhatunk meg a súlyfeleslegtől. Alakformáló kezeléseim teljesen veszélytelenek és fájdalommentesek, sőt, mivel masszírozó technikákat ötvöznek, még kellemesek is!',
          image: 'masszazs-terapia.jpg',
          icon: 'feszesbor.svg',
          path: '/kezelesek',
        },
      ],
    };
  },
};
</script>

<style>
.services-wrapper {
  padding-block: clamp(1em, 5vw, 6em);
  /* padding-inline: 2em; */
  max-width: 80em;
  margin-inline: auto;
}
</style>
