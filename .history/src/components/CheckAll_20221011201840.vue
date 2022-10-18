<template>
  <div>
    <button type="button" @click.prevent="click1" class="check">CHECK</button>
    <br>
    <br>
    <button type="button" @click.prevent="clear" class="clear">CLEAR</button>
  </div>
</template>

<script>
export default {
  methods: {
    click1() {
      this.$emit('show-all');
      }
    },
    click2() {
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
    color: #bd2130;
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
