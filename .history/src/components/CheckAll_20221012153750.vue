<template>
  <div>
    <button type="button" @click.prevent="show" class="check">A</button>
    <button type="button" @click.prevent="clear" class="clear">C</button>
    <
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
    text-shadow: 2px 2px 5px rgb(0, 0, 0);
    position: relative;
    left: 300px;
    border: 0px;
    border-radius: 5px;
    width: 60px;
    height: 30px;
    color: #101110;
    background: #11ac11;
    box-shadow:2px 2px 5px rgb(46, 97, 16);
  }
  .check {
    text-align: center;
    position: relative;
    left: 0px;
    border: 0px;
    border-radius: 5px;
    width: 60px;
    color: #bd2130;
    height: 30px;
    background: #11ac11;
    box-shadow:2px 2px 5px rgb(46, 97, 16);
  }
</style>
