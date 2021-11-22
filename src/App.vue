<template>
  <v-app>
  <Footer/>
      <router-view></router-view>
    
  </v-app>
</template>

<script>

import Register from './components/Register.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',

  components: {
    Register, Footer
  },

  data: () => ({
    //
  }),
};
</script>