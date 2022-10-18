<template>
  <div id="app">
    <h1>To-Do List</h1>
    <h2>this is a h2</h2>
  </div>
  
</template>


<script>
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  components:{
    TodoItem
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e7ae7;
  margin-top: 60px;
}
</style>
