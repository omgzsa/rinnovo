<template>
  <v-container fluid pa-0>
    <Hero />
    <Features />
    <About id="rolam" />
    <Services id="szolgaltatasok" />
    <Testimonials />
    <Contact id="kapcsolat" />
  </v-container>
</template>

<script>
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Testimonials from '../components/Testimonials.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Home',

  components: {
    Hero,
    Features,
    About,
    Services,
    Testimonials,
    Contact,
  },
};
</script>
