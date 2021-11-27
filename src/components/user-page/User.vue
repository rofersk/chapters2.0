<template>
  <v-app>
    <navbar ref="navbar"></navbar>
    <app-header
      @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
    ></app-header>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UserNavigation from './UserNavigation';
import UserHeader from './UserHeader';
export default {
  name: 'User',

  components: {
    navbar: UserNavigation,
    'app-header': UserHeader,
  },

  data: () => ({
    //
  }),
};
</script>
