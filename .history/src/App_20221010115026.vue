<template>
  <div id="app">
    <h1 id="head">To-Do List</h1>
    <to
    <ul id="todo">
      <li v-for="item in TodoItems" :key="item.id">
        <TodoItem :label="item.label" :done="item.done" :id="item.id"></TodoItem>
      </li>
    </ul>
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
  </div>

</template>

<script>
import TodoItem from './components/TodoItem.vue';
import uniqueId from 'lodash.uniqueid';
import TodoForm from './components/TodoForm.vue';
export default {
  name: 'App',
  components:{
    TodoItem,
    TodoForm
  },
  data(){
    return{
      TodoItems:[
        {id: uniqueId('todo-'), label: 'Learn Vue', done: false},
        {id: uniqueId('todo-'), label: 'Learn Node', done: true},
        {id: uniqueId('todo-'), label: 'research', done: false}
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
