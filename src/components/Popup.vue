<template>
  <div class="popup">
    <div class="popup__backdrop" @click="close"></div>
    <div class="popup__window">
      <a href="#" @click.prevent="close" class="popup__close">&times;</a>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
