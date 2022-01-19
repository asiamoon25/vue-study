<template>
<div>
  <default-body/>
</div>
</template>
<script>
import DefaultBody from '@/components/default/DefaultBody';
import DefaultHeader from '@/components/default/DefaultHeader';

export default {
  name: 'Main',
  components: { DefaultBody },

  comments: {
    DefaultHeader,
    DefaultBody,
  },
};
</script>

<style scoped>

</style>
