<template>
  <pre>{{ allCapitals }}</pre>
</template>

<script>
import { getCapitals } from '@/api';

export default {
  name: 'Capitals',
  data() {
    return {
      allCapitals: [],
    };
  },
  async created() {
    const res = await getCapitals();
    this.allCapitals = res.data.data;
  },
};
</script>

<style></style>
