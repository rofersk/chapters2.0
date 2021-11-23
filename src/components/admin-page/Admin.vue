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
import AdminNavigation from './AdminNavigation';
import Header from './Header';
export default {
  name: 'Admin',

  components: {
    navbar: AdminNavigation,
    'app-header': Header,
  },

  data: () => ({
    //
  }),
};
</script>
