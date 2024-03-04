<template>
  <label>
    <slot />
    <input type="number" :value="property" @input="this.$emit('change-property', $event)" />
  </label>
</template>
<script>
export default {
  emits: ["change-property"],
  props: ["property"],
  setup(props) {
    const alertProps = () => {
      //Options: this.property
      //Composition API: props.property
      alert(props.property);

    };
    return {
      alertProps
    }
  },
  mounted() {
    this.alertProps();
  }
};
</script>