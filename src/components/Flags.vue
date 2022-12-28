<template>
  {{ id }}
  <div
    class="w-[400px] h-[300px] shadow-lg p-4 flex items-center justify-center"
  >
    <img
      :src="`${allFlags[id].flag}`"
      width="400"
      height="300"
      class="border border-black max-h-full"
    />
  </div>
  <div>{{ allFlags[id].name }}</div>
  <button @click="drawFlag()" class="rounded-sm shadow py-1 px-3 uppercase">
    next
  </button>
  <pre>{{ allFlags[0] }}</pre>
</template>

<script>
import { getFlags } from '@/api';

function getRandomId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  name: 'Flags',
  data() {
    return {
      allFlags: [],
      flagUrl: '',
      id: '',
    };
  },
  async created() {
    const res = await getFlags();
    this.allFlags = res.data.data;
    this.id = getRandomId(1, this.allFlags.length);
  },
  methods: {
    drawFlag() {
      this.id = getRandomId(1, this.allFlags.length);
    },
  },
};
</script>

<style></style>
