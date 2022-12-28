<template>
  <div class="flex items-center justify-center flex-col h-screen">
    <div class="container px-5 text-center">
      <h1 class="text-2xl mb-6">Welcome in Guess The Country</h1>
      <p class="text-lg mb-6">You can choose game:</p>
      <div class="lg:grid grid-cols-2 gap-10">
        <div class="shadow-xl hover:shadow-2xl p-8">
          <img
            alt="flag example"
            src="../assets/Flag_of_Barbados.svg"
            width="428"
            height="285"
            class="mx-auto"
          />
          <p class="mt-4 text-xl uppercase">Flags</p>
        </div>
        <div class="shadow-xl hover:shadow-2xl p-8">
          <img
            alt="flag example"
            src="../assets/city.jpg"
            width="428"
            height="285"
            class="mx-auto"
          />
          <p class="mt-4 text-xl uppercase">Capital cities</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style></style>
