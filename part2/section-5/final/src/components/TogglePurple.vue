<template>
  <label> <input type="checkbox" @change="changePurple" /> Purple </label>
</template>

<script>
export default {
  emits:["ChangePurple"],
  methods:{
    changePurple(){
      this.$emit("ChangePurple","TogglePurple arguments");
    }
  }
};
</script>
