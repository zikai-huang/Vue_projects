<template>
  <div id="app">
    <h1 id="head">To-Do List</h1>
    <todo-form @todo-added="addTodo"></todo-form>
    <ul id="todo">
      <li v-for="item in TodoItems" :key="item.id">
        <todo-item :label="item.label" :done="item.done" :id="item.id"></todo-item>
      </li>
    </ul>

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
    return {
      TodoItems: [
        { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'), label: 'Learn Node', done: true },
        { id: uniqueId('todo-'), label: 'research', done: false }
      ]
    };
  },
  methods: {
    addTodo(toDoLabel) {
      this.
      console.log('To-do added', toDoLabel);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
