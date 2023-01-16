<template>
  <div class="p-10">
    <h1 class="text-3xl uppercase">Capital cities</h1>
    <div class="flex gap-4 my-8">
      <button
        @click="displayCapital()"
        class="rounded-sm shadow-lg transition duration-300 py-1 px-3 uppercase bg-[#A9C2DA] hover:bg-[#A9C2DA95]"
      >
        Capital city &#8594; guess country
      </button>
      <button
        @click="displayCountry()"
        class="rounded-sm shadow-lg transition duration-300 py-1 px-3 uppercase bg-[#A9C2DA] hover:bg-[#A9C2DA95]"
      >
        Country &#8594; guess capital city
      </button>
    </div>
    <div v-show="game">
      <div
        class="w-[400px] h-[100px] shadow-lg p-2 flex items-center justify-center bg-white text-lg"
      >
        <p v-if="game === 'capital'">{{ allCapitals[id]?.capital }}</p>
        <p v-else-if="game === 'country'">{{ allCapitals[id]?.name }}</p>
      </div>
      <div v-if="game === 'capital'" class="mt-2">
        {{ allCapitals[id]?.name }}
      </div>
      <div v-else-if="game === 'country'" class="mt-2">
        {{ allCapitals[id]?.capital }}
      </div>
      <div class="flex items-center mt-4">
        <form @submit.prevent="checkAnswer()">
          <input
            ref="input"
            type="text"
            v-model="userAnswer"
            class="rounded-sm shadow-lg transition duration-300 w-[400px] py-1 px-3 uppercase border border-[#A9C2DA]"
            placeholder="Country"
          />
          <input
            v-show="!message"
            class="rounded-sm shadow-lg transition duration-300 w-[120px] py-1 px-3 uppercase ml-4 bg-[#A9C2DA] hover:bg-[#A9C2DA95] cursor-pointer"
            type="submit"
            value="check"
          />
        </form>
        <span class="ml-4 text-lg" :style="{ color: message.color }">{{
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
    </div>
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
      game: '',
    };
  },
  async created() {
    const res = await getCapitals();
    this.allCapitals = res.data.data;
    this.id = getRandomId(0, this.allCapitals.length);
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    displayCapital() {
      this.game = 'capital';
    },
    displayCountry() {
      this.game = 'country';
    },
    focusInput() {
      this.$refs.input.focus();
    },
    focusNext() {
      this.$refs.next.focus();
    },
    drawFlag() {
      this.id = getRandomId(0, this.allCapitals.length);
      this.message = '';
      this.userAnswer = '';
      this.focusInput();
    },
    checkAnswer() {
      const currentCountry = this.allCapitals[this.id];
      const correctAnswer =
        this.game === 'capital'
          ? currentCountry.name.toLocaleLowerCase()
          : currentCountry.capital.toLocaleLowerCase();
      if (this.userAnswer.toLocaleLowerCase() === correctAnswer) {
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
