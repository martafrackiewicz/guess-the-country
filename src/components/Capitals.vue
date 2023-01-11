<template>
  <div class="p-10">
    <h1 class="text-3xl mb-6 uppercase">Capital cities</h1>
    <div
      class="w-[400px] h-[100px] shadow-lg p-2 flex items-center justify-center bg-white text-lg"
    >
      <p>{{ allCapitals[id]?.capital }}</p>
    </div>

    <div class="mt-2">{{ allCapitals[id]?.name }}</div>
    <div class="flex items-center mt-4">
      <form @submit.prevent="checkAnswer()">
        <input
          ref="input"
          type="text"
          v-model="userAnswer"
          class="rounded-sm shadow-lg transition duration-300 w-[400px] py-1 px-3 uppercase border border-[#A9C2DA]"
        />
        <input
          v-show="!message"
          class="rounded-sm shadow-lg transition duration-300 w-[120px] py-1 px-3 uppercase ml-4 bg-[#A9C2DA] hover:bg-[#A9C2DA95]"
          type="submit"
          value="check"
        />
      </form>
      <span :class="`ml-4`" :style="{ color: message.color }">{{
        message.text
      }}</span>
    </div>
    <button
      v-show="message.ok"
      ref="next"
      @click="drawFlag()"
      class="rounded-sm shadow-lg transition duration-300 w-[120px] py-1 px-3 uppercase mt-4 bg-[#A9C2DA] hover:bg-[#A9C2DA95]"
    >
      next
    </button>
    <!-- <pre>{{ allCapitals[0] }}</pre> -->
  </div>
</template>

<script>
import { getCapitals } from '@/api';

function getRandomId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  name: 'Capitals',
  data() {
    return {
      allCapitals: [],
      id: '',
      userAnswer: '',
      message: '',
    };
  },
  async created() {
    const res = await getCapitals();
    this.allCapitals = res.data.data;
    this.id = getRandomId(1, this.allCapitals.length);
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
    },
    focusNext() {
      this.$refs.next.focus();
    },
    drawFlag() {
      this.id = getRandomId(1, this.allCapitals.length);
      this.message = '';
      this.userAnswer = '';
      this.focusInput();
    },
    checkAnswer() {
      if (
        this.userAnswer.toLocaleLowerCase() ===
        this.allCapitals[this.id].name.toLocaleLowerCase()
      ) {
        this.message = { ok: true, text: 'Correct!', color: '#53a653' };
        this.$refs.next.style.display = 'block';
        this.focusNext();
      } else {
        this.message = { ok: false, text: 'Try again', color: '#e53935' };
        setTimeout(() => {
          this.message = '';
        }, 1000);
      }
    },
  },
};
</script>

<style></style>
