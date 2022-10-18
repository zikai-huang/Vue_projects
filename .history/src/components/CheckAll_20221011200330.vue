<template>
  <div>
    <button type="button" @click.prevent="click" class="check">CHECK</button>
    <button type="button" @click.prevent="click" class="clear">CLEAR</button>
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
  .clear{

  }
  .check {
    text-align: center;
    position: relative;
    left: 330px;
    border: 2px solid rgb(78, 33, 33);
    width: 80px;
    color: #bd2130;
  }
</style>
