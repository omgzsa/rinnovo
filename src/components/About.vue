<template>
  <v-container fluid pa-0>
    <div class="about-wrapper">
      <v-row no-gutters class="mx-auto">
        <v-col cols="12" md="6">
          <v-img src="@/assets/rolam-1.png" aspect-ratio="1.9" />
        </v-col>
        <v-col
          class="d-flex flex-column"
          cols="12"
          md="6"
          style="background-color: #878c61; justify-content: center"
        >
          <div
            class="about-content mx-auto px-4 px-sm-16 px-md-12 py-10 py-sm-12"
          >
            <h2 class="text-h4 text-sm-h3 mb-8 white--text">
              13 év alatt szerzett tapasztalat és tudás
            </h2>
            <p class="body-2 text-sm-body-1 white--text">
              Aki járt már nálam az tudja, minden tőlem telhetőt megteszek
              vendégeim egészségéért, állapotuk javulásáért, hogy félelmei
              elmúljanak és egy nyugodt, harmonikus személyiség lehessen. A
              leghatékonyabb technológiákat alkalmazom, amik végül látványos
              eredményeket hoznak. Küldetésem, hogy segítsem az embereket a
              gyógyulásban,
            </p>
            <p class="body-2 text-sm-body-1 white--text">
              problémájuk megoldásában, mert szeretnék minél több boldog és
              elégedett embert látni. Összetett szolgáltatásként a kezeléseken
              felül hasznos tanácsokkal is ellátlak majd problémád megoldásához.
              Az eredmények magukért beszélnek, kérj időpontot és próbáld ki
              kezeléseimet! Itt mindenki megtalálja a számára megfelelőt,
              elérhető áron.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="6"
          offset="5"
          md="4"
          offset-md="2"
          order="3"
          order-md="1"
          class="relative py-8 my-auto"
        >
          <div class="about-feat">
            <svg
              width="143"
              height="70"
              viewBox="0 0 143 70"
              fill-opacity="20%"
              class="about-watermark"
            >
              <path
                d="M0.912 68V66.96L4.968 65.712C7.60267 64.8107 8.92 63.0427 8.92 60.408V10.072L0.496 11.216V9.864C4.58667 9.032 8.504 7.85333 12.248 6.32799C16.0613 4.80266 19.632 3.03466 22.96 1.02399L24.312 1.95999L23.896 16.832V60.408C23.896 63.112 25.2133 64.8453 27.848 65.608L32.112 66.96V68H0.912ZM60.7754 69.56C56.13 69.56 52.3167 69.04 49.3354 68C46.4234 66.96 43.546 65.7467 40.7034 64.36L41.8474 50.84H42.8874L47.4634 59.264C50.514 64.7413 54.7434 67.48 60.1514 67.48C63.3407 67.48 65.906 66.1627 67.8474 63.528C69.858 60.824 70.8634 56.3173 70.8634 50.008C70.8634 44.5307 70.0314 40.6133 68.3674 38.256C66.7034 35.8293 63.8607 34.616 59.8394 34.616H53.5994V32.536H59.1114C62.786 32.536 65.4207 31.4267 67.0154 29.208C68.6794 26.9893 69.5114 23.1413 69.5114 17.664C69.5114 12.3253 68.714 8.54666 67.1194 6.32799C65.5247 4.03999 63.41 2.896 60.7754 2.896C58.1407 2.896 55.922 3.65866 54.1194 5.184C52.386 6.70933 50.9647 8.512 49.8554 10.592L45.1754 19.328L44.1354 19.224L45.1754 3.93599C47.394 2.96533 49.8554 2.16799 52.5594 1.54399C55.3327 0.850661 58.418 0.503995 61.8154 0.503995C69.0954 0.503995 74.6074 2.09866 78.3514 5.288C82.1647 8.408 84.0714 12.3253 84.0714 17.04C84.0714 20.4373 82.6154 23.696 79.7034 26.816C76.7914 29.8667 72.2154 31.9813 65.9754 33.16C73.0474 33.784 78.178 35.6907 81.3674 38.88C84.5567 42.0693 86.1514 45.9173 86.1514 50.424C86.1514 54.0293 85.1114 57.288 83.0314 60.2C81.0207 63.112 78.1087 65.4 74.2954 67.064C70.5514 68.728 66.0447 69.56 60.7754 69.56ZM116.647 60.408V35.344H92.8309V33.264H116.647V8.616H119.143V33.264H142.959V35.344H119.143V60.408H116.647Z"
                fill="#6C733D"
              />
            </svg>
            <h3 class="text-h5">Győrben csak nálam elérhető</h3>
            <p class="body-2">
              Cardio Lounge és LPG Lipomassage szolgáltatások Győrben kizárólag
              nálam vehetők igénybe. Már több mint 13 éve a piacon.
            </p>
          </div>
        </v-col>
        <v-col cols="6" md="3" order="1" order-md-up="3" class="d-flex">
          <v-img src="@/assets/rolam-2.png" alt="" aspect-ratio="1.125" />
        </v-col>
        <v-col cols="6" md="3" order="2" order-md-up="4">
          <v-img src="@/assets/rolam-3.jpg" alt="" aspect-ratio="1.125" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
.about-feat {
  max-width: 16em;
}

.about-wrapper {
  margin-inline: auto;
  max-width: 80em;
}

.about-content {
  max-width: 45em;
}

.relative {
  position: relative;
}

.about-watermark {
  overflow: hidden;
  position: absolute;

  top: 2rem;
  left: -7rem;

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
