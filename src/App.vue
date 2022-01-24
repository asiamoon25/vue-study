<template>
  <v-app>
    <default-header/>
      <router-view/>
  </v-app>
</template>

<script>
import DefaultHeader from '@/components/default/DefaultHeader';

export default {
  name: 'App',
  components: { DefaultHeader },
  data: () => ({
    //
  }),
};
</script>
