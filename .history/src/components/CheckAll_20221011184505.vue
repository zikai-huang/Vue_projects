<template>
  <div>
    <button type="submit" @click.o="click">CHECK</button>
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
