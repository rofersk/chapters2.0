<template>
  <v-app>

      <HelloWorld/>
      <hr>
      <Register/>
      <router-view></router-view>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Register from './components/Register.vue';
export default {
  name: 'App',

  components: {
    HelloWorld, Register
  },

  data: () => ({
    //
  }),
};
</script>