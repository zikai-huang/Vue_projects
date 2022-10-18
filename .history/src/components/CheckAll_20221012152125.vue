<template>
  <div>
    <button type="button" @click.prevent="show" class="check">A</button>
    <br>
    <br>
    <button type="button" @click.prevent="clear" class="clear">C</button>
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
    left: 350px;
    border: 2px solid rgb(78, 33, 33);
    border-radius: 5;
    width: 60px;
    height: 30px;
    color: #101110;
    background: #11ac11;
  }
  .check {
    text-align: center;
    position: relative;
    left: 350px;
    border: 2px solid rgb(78, 33, 33);
    width: 60px;
    color: #bd2130;
    height: 30px;
    background: #11ac11;
  }
</style>
