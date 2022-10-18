<template>
  <div>
    <button type="button" @click.prevent="show" class="check">CHECK</button>
    <br>
    <br>
    <button type="button" @click.prevent="clear" class="clear">CLEAR</button>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$emit('show-all');
      }
    },
    clear() {
      this.$emit('del-all');
    }
}
</script>

<style scoped>
  .clear {
    text-align: center;
    position: relative;
    left: 330px;
    border: 2px solid rgb(78, 33, 33);
    width: 80px;
    color: #055805;
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
