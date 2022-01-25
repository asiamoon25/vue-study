<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item
                v-for="(side,i) in sides"
                :key="i"
                link
                :to="side.link"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{side.name}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet
            min-height="70vh"
            rounded="lg"
          >
            <router-view/>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'DefaultBody',
  data: () => ({
    sides: [
      { name: 'Home', link: '/' },
      { name: 'Board', link: '/test/index' },
    ],
  }),
};
</script>

<style scoped>

</style>
