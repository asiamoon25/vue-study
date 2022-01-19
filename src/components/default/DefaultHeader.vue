<template>
  <div>
    <v-app-bar
      color="primary"
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          v-for="(link,i) in links"
          :key="i"
        >
          <v-list-item :to="link.to">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{link.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data: () => ({
    drawer: false,
    group: null,
    links: [
      { icon: 'mdi-home', name: 'Home', to: '/' },
      { icon: 'mdi-email', name: 'TEST', to: '/test' },
    ],
  }),
};
</script>

<style scoped>

</style>
