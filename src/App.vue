<template>
  <v-app>
  <Header/>
      <router-view></router-view>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Register from './components/Register.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',

  components: {
    HelloWorld, Register, Header
  },

  data: () => ({
    //
  }),
};
</script>