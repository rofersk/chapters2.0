<template>
  <v-card class="mx-auto" width="256" tile>
    <v-navigation-drawer class="app-side-bar" v-model="drawer" app>
      <v-list>
        <div>
          <v-list-item-content class="p-1 m-1">
            <v-list-item two-line>
              <v-list-item-avatar>
                <v-avatar class="blue darken-2 white--text" size="42" left>
                  {{ currentUser.user_name.slice(0, 1).toUpperCase() }}
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{
                  currentUser.user_name +
                  ' ' +
                  currentUser.user_lastname.slice(0, 1).toUpperCase()
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  currentUser.user_role
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </div>
      </v-list>
      <v-divider></v-divider>
      <v-list class="mt-1" nav dense>
        <v-list-item-group v-model="selectedItem" color="secondary">
          <div v-for="(item, i) in item_list" :key="i">
            <v-list-item
              class="px-1 my-3 nav-btn-desu"
              v-if="!item.has_sub_items && !item.linkTo.includes('https:')"
              :to="item.linkTo"
            >
              <v-list-item-icon class="p-2 bg-white nav-list-icon">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="item.has_sub_items">
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              class="px-1 my-3 nav-btn-desu"
              v-else-if="!item.has_sub_items"
              v-bind:href="item.linkTo"
            >
              <v-list-item-icon class="p-2 bg-white nav-list-icon">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="item.has_sub_items">
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
      currentUser: {
        user_name: '',
        user_lastname: '',
        user_role: '',
        abbrName: '',
      },
      drawer: true,
      selectedItem: 0,
      item_list: [
        {
          name: 'Dashboard',
          text: 'Dashboard',
          icon: 'mdi-chart-bar-stacked',
          linkTo: '/yes',
          has_sub_items: false,
        },
        {
          name: 'CSOIndicator',
          text: 'CSO² Project Indicator',
          icon: 'mdi-briefcase-edit',
          linkTo: '/yes',
          has_sub_items: false,
        },
        {
          name: 'CSOProfile',
          text: 'CSO/CSO Network Basic Information',
          icon: 'mdi-account-network',
          linkTo: '/cso-profile',
          has_sub_items: false,
        },
        {
          name: 'Assessment',
          text: 'Assessment',
          icon: 'mdi-format-list-text',
          linkTo: '/assessment',
          has_sub_items: false,
        },
        {
          name: 'FinanceTracker',
          text: 'Finance Tracker',
          icon: 'mdi-credit-card',
          linkTo: '/finance-tracker',
          has_sub_items: false,
        },
        {
          name: 'ProjectTrackingDocuments',
          text: 'Project Tracking Document',
          icon: 'mdi-clipboard-text-search-outline',
          linkTo: '/project-tracking-documents',
          has_sub_items: false,
        },
        {
          name: 'LMS',
          text: 'LMS',
          icon: 'mdi-book-open-page-variant',
          linkTo: '/lms-data',
          has_sub_items: false,
        },
        {
          name: 'Users',
          text: 'Users',
          icon: 'mdi-account-group',
          linkTo: '/system-users',
          has_sub_items: false,
        },
        //{ text: 'Activity Feedback', icon: 'mdi-comment-quote', linkTo: 'https://cso2projectdatabase.000webhostapp.com/activity_feedback.php', has_sub_items: false },
        {
          text: 'CBLD Indicators',
          icon: 'mdi-archive-arrow-up-outline',
          linkTo: 'https://cso2projectdatabase.000webhostapp.com/cbld.php',
          has_sub_items: false,
        },
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
  color: #2e3a59;
}

.nav-btn-desu {
  cursor: pointer;
  text-decoration: none;
  border-radius: 6px;
}

.nav-btn-desu:hover {
  transition: 0.2s ease-in-out;
  background-color: #e0e0e0;
}
</style>
