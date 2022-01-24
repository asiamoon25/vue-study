<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="(link,i) in links"
          :key="i"
          text
          :to="link.to"
        >
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data: () => ({
    drawer: false,
    group: null,
    links: [
      { name: 'Home', to: '/' },
      { name: 'TEST', to: '/test/index' },
    ],
  }),
};
</script>

<style scoped>

</style>
