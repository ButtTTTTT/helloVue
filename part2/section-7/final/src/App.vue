<template>
  <h1>Advice Generator</h1>

  <p>{{ advice }}</p>

  <button @click="getAdvice">Get Advice</button>
</template>

<script>
const URL = "https://api.adviceslip.com/advice"
export default {
  data() {
    return {
      advice: "",
    };
  },
  methods: {
    async getAdvice() {
      const data = await fetch(URL);
      const jsonData = await data.json();
      this.advice = jsonData.slip.advice;

    }
  }

}
</script>
