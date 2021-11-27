<template>
  <v-app-bar app color="orange" dark>
    <v-app-bar-nav-icon
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Student Chapters</v-toolbar-title>
  </v-app-bar>
</template>
