<template>
  <div id="app">
    <h1 id="head">To-Do List</h1>
    
      <ul id="todo">
        <li v-for="item in TodoItems" :key="item.id">
          <TodoItem :label="item.label" :done="item.done"></TodoItem>
        </li>
      </ul>
  </div>

</template>

<script>
import TodoItem from './components/TodoItem.vue';
import uniqueId from 'lodash.uniqueid';
export default {
  name: 'App',
  components:{
    TodoItem
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
