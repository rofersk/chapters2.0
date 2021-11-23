<template>
  <v-app>
    <Card />
    <Footer />
  </v-app>
</template>

<script>
import Card from './Card';
import Footer from './Footer';
export default {
  name: 'LandingPage',

  components: {
    Card,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
