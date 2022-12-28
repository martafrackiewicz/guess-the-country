<template>
  <pre>{{ allFlags }}</pre>
</template>

<script>
import { getFlags } from '@/api';

export default {
  name: 'Flags',
  data() {
    return {
      allFlags: [],
    };
  },
  async created() {
    const res = await getFlags();
    this.allFlags = res.data.data;
  },
};
</script>

<style></style>
