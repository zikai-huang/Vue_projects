<template>
  <div id="app">
    <h1 id="head">To-Do List</h1>
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
      <ul id="todo">
        <li>
          <TodoItem label="this is a ul li" :done="true"></TodoItem>
        </li>
      </ul>
      <ol>
        <li>
          <TodoItem label="this is a ol li" :done="false"></TodoItem>
        </li>
      </ol>
      <span>
        span
      </span>
  </div>

</template>

<script>
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  components:{
    TodoItem
  },
  data(){
    return{
      TodoItems:[
        {label: 'Learn Vue', done: false},
        {label:}
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #e7d10e;
  margin-top: 10px;
}
#head {
  text-align: center;
  color: red;
}
#todo{
  text-align: center;
}
</style>
