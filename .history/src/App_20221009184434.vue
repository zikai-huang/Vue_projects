<template>
  <div id="app">
    <h1>To-Do List</h1>
    <samp>import cv2 import torch</samp>
    <br>
    <br>
    <input type="button" value="button1">
    <br>
    <br>
    <button>button2</button>
    <br>
    <br>
    <input id="mycar" list="cars">
    <datalist id="cars">
      <option value="1"></option>
      <option value="2"></option>
    </datalist>
      <ul>
        <li>
          <TodoItem></TodoItem>
        </li>
        <li>
          <TodoItem></TodoItem>
        </li>
      </ul>
      <ol>
        <li>
          <TodoItem></TodoItem>
        </li>
        <li>
          <TodoItem></TodoItem>
        </li>
      </ol>
      <span
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
