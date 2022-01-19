<template>
  <v-app>
    <default-header/>
    <default-body/>
  </v-app>
</template>
<script>

import DefaultHeader from '@/components/default/DefaultHeader';
import DefaultBody from '@/components/default/DefaultBody';

export default {
  name: 'Home',

  components: {
    DefaultBody,
    DefaultHeader,
  },
};
</script>
