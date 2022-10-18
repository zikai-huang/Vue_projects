<template>
  <div>
    <button type="button" @click.prevent="show" class="check">全部</button>
    <button type="button" @click="clear" class="clear">清除</button>
    <br>
    <br>
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
      this.$emit('delete-all');
    }
}
</script>

<style scoped>
  .clear {
    text-align: center;
    font-weight: lighter;
    position: relative;
    left: 300px;
    border: 0px;
    border-radius: 5px;
    margin
    width: 60px;
    height: 30px;
    color: #101110;
    background: #11ac11;
    box-shadow:2px 2px 5px rgb(46, 97, 16);
  }
  .check {
    text-align: center;
    font-weight: lighter;
    position: relative;
    left: 0px;
    border: 0px;
    border-radius: 5px;
    width: 60px;
    color: #000000;
    height: 30px;
    background: #11ac11;
    box-shadow:2px 2px 5px rgb(46, 97, 16);
  }
</style>
