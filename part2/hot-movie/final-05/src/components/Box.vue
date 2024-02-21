<template>
  <div class="box">
    <button class="btn-toggle" @click="toggleOpen">
      {{ isOpen ? closeString : openString }}
    </button>

    <div v-if="openString === '+'">
      <div v-show="isOpen">
        <slot />
      </div>
    </div>

    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openString: {
      type: String,
      default: "+",
      required: false,
    },

    closeString: {
      type: String,
      default: "-",
      required: false,
    },

    handleSwitchComponent: {
      type: Function,
      required: false,
    },
  },

  data() {
    return {
      isOpen: true,
    };
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;

      if (this.closeString !== "-") {
        this.handleSwitchComponent();
      }
    },
  },
};
</script>
