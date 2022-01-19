<template>
  <v-app>
    <default-header/>
    <Main/>
  </v-app>
</template>
<script>

import Main from '@/components/Main';
import DefaultHeader from '@/components/default/DefaultHeader';

export default {
  name: 'Home',

  components: {
    DefaultHeader,
    Main,
  },
};
</script>
