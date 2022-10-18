<template>
  <div>
    <button type="button" @click.prevent="click" class="check">CHECK</button>
    <button type="button" @click.prevent="click" class="cle">CLEAR</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('show-all');
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
