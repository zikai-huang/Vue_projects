<template>
  <div>
    <button type="button" @click.prevent="click" >CHECK</button>
    <button type="button" @click.prevent="click">CLEAR</button>
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
