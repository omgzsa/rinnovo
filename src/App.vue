<template>
  <v-app>
    <Navbar :items="items" />

    <v-main class="pa-0">
      <v-container fluid pa-0>
        <!-- <router-view v-slot="{ Component, route }">
          <transition name="component-fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view> -->
        <v-scroll-x-transition mode="in" hide-on-leave="true">
          <router-view></router-view>
        </v-scroll-x-transition>
      </v-container>
    </v-main>

    <v-footer padless color="#878c6190">
      <v-col class="text-center white--text">
        {{ new Date().getFullYear() }} —
        <strong class="white--text">rinnovo</strong>
        <p class="white--text">Minden jog fenntartva.</p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  name: 'App',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Rólam', link: '/#rolam' },
        { title: 'Szolgáltatások', link: '/#szolgaltatasok' },
        { title: 'Masszázs', link: '/masszazs' },
        { title: 'Kezelések', link: '/kezelesek' },
        { title: 'Kapcsolat', link: '/#kapcsolat' },
      ],
    };
  },
};
</script>

<style>
/* .component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
} */
</style>
