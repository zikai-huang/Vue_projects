<template>
  <div>
    <button @click.prevent="show" class="check">{{label}}</button>
    <button @click.prevent="clear" class="clear">清除</button>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true, type: String }
  },
  data: 
  methods: {
    show() {
      label = '全部';
      this.$emit('show-all');
      if
    },
    clear() {
      this.$emit('delete-all');
    }
  }
}
</script>

<style scoped>
  .clear {
    text-align: center;
    font-weight: lighter;
    position: absolute;
    left: 280px;
    border: 0px;
    border-radius: 5px;
    margin:auto;
    width: 50px;
    height: 30px;
    color: #101110;
    background: #11ac11;
    box-shadow:2px 2px 5px rgb(46, 97, 16);
  }
  .check {
    text-align: center;
    font-weight: lighter;
    position: absolute;
    left: 190px;
    border: 0px;
    border-radius: 5px;
    width: 50px;
    color: #000000;
    height: 30px;
    background: #11ac11;
    box-shadow:2px 2px 5px rgb(46, 97, 16);
  }
</style>
