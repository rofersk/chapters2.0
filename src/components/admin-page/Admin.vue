<template>
  <v-app>
    <BookEntry />
    <router-view></router-view>
  </v-app>
</template>

<script>
import BookEntry from '../admin-page/BookEntry';
export default {
  name: 'Admin',

  components: {
    BookEntry,
  },

  data: () => ({
    //
  }),
};
</script>
