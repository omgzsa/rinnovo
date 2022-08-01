<template>
  <nav id="nav">
    <v-app-bar flat app dark fixed hide-on-scroll color="#79554890">
      <v-container fluid pa-0>
        <div
          class="d-flex align-center justify-space-between mx-auto px-2 px-sm-6"
          style="max-width: 80em"
        >
          <span class="hidden-md-and-up">
            <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
          </span>

          <v-app-bar-title shrink-on-scroll class="">
            <router-link to="/" tag="span" style="cursor: pointer">
              <v-img
                alt="rinnovo logo"
                class="shrink ml-2 logo"
                contain
                src="@/assets/rinnovo.svg"
                transition="scale-transition"
                width="140"
              />
            </router-link>
          </v-app-bar-title>

          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
              text
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              class="py-3 px-5 mr-1"
            >
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list class="d-flex flex-column">
        <v-list-item-group v-model="group">
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      drawer: false,
      group: null,
      scrollPosition: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="css">
.logo {
  opacity: 1;
}
</style>
