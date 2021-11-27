<template>
  <v-card class="mx-auto" width="256" tile>
    <v-navigation-drawer class="app-side-bar" v-model="drawer" app>
      <v-list>
        <div>
          <v-list-item-content class="p-1 m-1">
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-avatar class="blue darken-2 white--text" size="42" left>
                  {{ adminCurrentUser.admin_name.slice(0, 1).toUpperCase() }}
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{
                  adminCurrentUser.admin_name +
                  ' ' +
                  adminCurrentUser.admin_lastname.slice(0, 1).toUpperCase()
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  adminCurrentUser.admin_role
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </div>
      </v-list>
      <v-divider></v-divider>
      <v-list class="mt-1" nav dense>
        <v-list-item-group v-model="selectedItems" color="secondary">
          <div v-for="(item, i) in item_lists" :key="i">
            <v-list-item
              class="px-1 my-3 nav-btn-desu"
              v-if="!item.has_sub_item && !item.linkTo.includes('https:')"
              :to="item.linkTo"
            >
              <v-list-item-icon class="p-2 bg-white nav-list-icon">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="item.has_sub_item">
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              class="px-1 my-3 nav-btn-desu"
              v-else-if="!item.has_sub_item"
              v-bind:href="item.linkTo"
            >
              <v-list-item-icon class="p-2 bg-white nav-list-icon">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="item.has_sub_item">
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-list-item-group>
        <v-list-item class="px-1 my-3 nav-btn-desu" link @click="logoutUser">
          <v-list-item-icon class="p-2 bg-white nav-list-icon">
            <v-icon>mdi-location-exit</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      adminCurrentUser: {
        admin_name: '',
        admin_lastname: '',
        admin_role: '',
        admin_abbrName: '',
      },
      drawer: true,
      selectedItems: 0,
      item_lists: [
        {
          name: 'Home',
          text: 'Home',
          icon: 'mdi mdi-home',
          linkTo: '/user-home',
          has_sub_item: false,
        },
        {
          name: 'Student Profile',
          text: 'Student Profile',
          icon: 'mdi mdi-account',
          linkTo: '/user-profile',
          has_sub_item: false,
        },
        {
          name: 'Reserved Books',
          text: 'Reserved Books',
          icon: 'mdi-book-multiple',
          linkTo: '/user-reserved-books',
          has_sub_item: false,
        },
        {
          name: 'History',
          text: 'History',
          icon: 'mdi-history',
          linkTo: '/user-history',
          has_sub_item: false,
        },
        //{ text: 'Activity Feedback', icon: 'mdi-comment-quote', linkTo: 'https://cso2projectdatabase.000webhostapp.com/activity_feedback.php', has_sub_items: false },
        //{ text: 'DIS', icon: 'mdi-archive-arrow-up-outline', linkTo: 'https://cso2projectdatabase.000webhostapp.com/dis.php', has_sub_items: false },
      ],
    };
  },
  methods: {
    logoutUser() {},
  },
  created() {},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.app-side-bar {
  background-color: transparent;
  background-image: url('/img/navbar_back_grad.png');
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
}

.nav-list-icon {
  border-radius: 6px;
}

i.v-icon.v-icon {
  color: #FF8C00;
}

.nav-btn-desu {
  cursor: pointer;
  text-decoration: none;
  border-radius: 6px;
}

.nav-btn-desu:hover {
  transition: 0.2s ease-in-out;
  background-color: #FF8C00;
}
</style>
