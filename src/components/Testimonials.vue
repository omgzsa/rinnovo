<template>
  <v-container
    class="curved"
    pa-0
    fluid
    style="background-color: #a6887740; position: relative"
  >
    <div class="testimonials-wrapper py-8">
      <h2 class="text-h4 text-sm-h3 text-left mt-6 mb-10">Vendégeim mondták</h2>
      <v-carousel
        hide-delimiter-background
        hide-delimiters
        height="420"
        :show-arrows="true"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          class="slide-card my-auto"
          transition="scroll-x-transition"
        >
          <v-row class="fill-height pa-2" align="center">
            <v-col cols="9" sm="6" md="4" lg="4" offset-md="2" offset-lg="2">
              <v-img :src="require('../assets/' + slide.image)" />
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="4">
              <v-icon color="secondary" x-large left class="ml-n2"
                >mdi-format-quote-close</v-icon
              >
              <p class="body-2 text-sm-body-1">{{ slide.text }}</p>
              <p class="text-h6 font-weight-bold mb-0">
                {{ slide.patient }} ({{ slide.age }})
              </p>
              <p class="text-h6 font-weight-bold mb-0">
                {{ slide.treatment }} kezelés
              </p>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-img :src="require('../assets/wave.svg')" class="wave" />
    <v-img :src="require('../assets/wave-upsdn.svg')" class="wave-2" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: 'vendeg-1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ornare rutrum. Nulla placerat, nibh in accumsan.',
          patient: 'Enikő',
          age: 24,
          treatment: '20',
        },
        {
          image: 'vendeg-2.jpg',
          text: 'Lorem Nulla placerat, nibh in accumsan dignissim, elit nisi auctor ligula, dignissim blandit tellus arcu in tortor.',
          patient: 'Kata',
          age: 33,
          treatment: '18',
        },
        {
          image: 'vendeg-3.jpg',
          text: 'Lorem ipsum dolor sit amet, elit nisi auctor ligula, dignissim blandit tellus arcu in tortor.',
          patient: 'Anikó',
          age: 39,
          treatment: '23',
        },
        {
          image: 'vendeg-4.jpg',
          text: 'Lorem elit nisi auctor ligula, dignissim blandit tellus arcu in tortor.',
          patient: 'Ági',
          age: 46,
          treatment: '15',
        },
      ],
    };
  },
};
</script>

<style>
.testimonials-wrapper {
  position: relative;
  padding-inline: 2em;
  max-width: 80em;
  margin-inline: auto;

  z-index: 1;
}

.curved {
  background-color: #a6887740;
}

.wave {
  position: absolute;
  top: -1px;
  left: 0;

  z-index: 0;
}

.wave-2 {
  position: absolute;
  bottom: -1px;
  right: 0;
}
</style>
