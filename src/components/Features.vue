<template>
  <v-container pa-0 fluid class="features-container">
    <div class="features-wrapper">
      <v-row>
        <v-col md="5" lg="4">
          <h2 class="text-h4 text-md-h3 mb-12" style="max-width: 12em">
            Milyen hatásai vannak a kezeléseknek?
          </h2>
        </v-col>
        <v-col cols="12" md="6" lg="8"
          ><FeaturesCard :features="features"
        /></v-col>
      </v-row>
    </div>
    <svg
      class="features-watermark"
      width="860"
      height="880"
      viewBox="0 0 75 75"
      fill-opacity="6%"
    >
      <path
        d="M64.9594 28.1969C64.5688 28.2813 59.325 29.5032 52.6062 33.7407C51.5969 28.8438 48.6094 19.675 39.7687 10.35L37.5 7.9563L35.2313 10.3532C26.3594 19.7125 23.3844 28.9063 22.3844 33.8344C15.6406 29.525 10.4375 28.2875 10.0562 28.2L6.25 27.35V31.25C6.25 54.0313 18.5156 68.75 37.5 68.75C56.1906 68.75 68.75 53.6813 68.75 31.25V27.3688L64.9594 28.1969ZM28.1219 37.6188C28.1281 37.5157 28.5969 27.9313 37.5 17.2063C46.2938 27.8313 46.8719 37.5 46.875 37.5V37.8907C43.3705 40.8029 40.2142 44.1103 37.4688 47.7469C34.7155 44.1745 31.5814 40.9125 28.1219 38.0188V37.6188ZM37.5 62.5C20.8875 62.5 13.9094 49.3875 12.6969 35.7375C17.8688 37.9813 27.1219 43.3188 34.9062 54.8719L37.5344 58.775L40.1125 54.8375C47.6938 43.25 57.0656 37.9282 62.2875 35.7063C61.0437 48.9188 54.075 62.5 37.5 62.5Z"
        fill="#40291C"
      />
    </svg>
  </v-container>
</template>

<script>
import FeaturesCard from '../components/FeaturesCard.vue';

export default {
  name: 'Features',

  components: { FeaturesCard },

  data: () => ({
    features: [
      {
        title: 'Formálja a testet, karcsúsít',
        icon: 'yoga',
        description:
          'Kezeli és eltünteti a narancsbőrt, edzi, erősíti a kötőszövetet, így javítja a bőr kontúrját. Helyreállítja a megereszkedett, ráncos bőrt és javítja a bőr feszességét.',
      },
      {
        title: 'Javítja a vérkeringést',
        icon: 'heart-pulse',
        description:
          'Vitalizál és nagymértékben javítja a közérzetet. Sportsérülések és izomhúzódások kezelése is alkalmas, mivel lazítja az izmokat és oldja a feszültséget.',
      },
      {
        title: 'Öngyógyító folyamat erősítése',
        icon: 'hospital-box',
        description:
          'Megteremti és fenntartja testünk harmóniáját. Segít egészségünk megtartásában és hatékony eszköz különböző fájdalmaink enyhítésére.',
      },
      {
        title: 'Enyhíti különféle fájdalmait',
        icon: 'spa',
        description:
          'Nagyon hatásos többek között hátfájás, migrén, álmatlanság, depresszió, szorongás ellen. Rendkívüli módon oldja a feszültséget és a stresszt.',
      },
    ],
  }),
};
</script>

<style>
.features-container {
  position: relative;
  overflow: hidden;
}

.features-wrapper {
  margin-inline: auto;
  padding-block: max(1rem, 5vw, 4rem);
  padding-inline: 2em;
  max-width: 80rem;
}

.features-watermark {
  position: absolute;
  top: -10rem;
  left: -10rem;

  /* unselectable */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  z-index: 1;
}
</style>
