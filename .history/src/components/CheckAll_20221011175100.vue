<template>
  <div>
    <button type="submit" @click="click">^</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
        this.$emit('')
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
