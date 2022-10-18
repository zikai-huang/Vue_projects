<template>
  <div>
    <button type="butto" @click.prevent="click">CHECK</button>
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
