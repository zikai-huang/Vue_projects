<template>
  <div id="app">
    <h1 id="head">To-Do List</h1>
    <todo-form @todo-added="addTodo"></todo-form>
    <p v-if="show.length==0"> 空 </p>
    <ul aria-labelledby="list-summary" class="stack-large" id="todo">
      <li v-for="item in show" :key="item.id">
        <todo-item v-bind="item" @checkbox-changed="updateDoneStatus(item.id)" @item-edited="itemEdit"></todo-item>
      </li>
    </ul>
    <check-all @show-all="show_all" @delete-all="delete_all"></check-all>
    <span class="items_count">
      {{TodoItems.filter(item => item.done).length}} out of {{TodoItems.length}} items completed
    </span>
  </div>

</template>

<script>

import TodoItem from './components/TodoItem.vue';
import uniqueId from 'lodash.uniqueid';
import TodoForm from './components/TodoForm.vue';
import CheckAll from './components/CheckAll.vue';

export default {
  name: 'App',
  components:{
    TodoItem,
    TodoForm,
    CheckAll
  },
  data(){
    return {
      TodoItems: [
        { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'), label: 'Learn Node', done: true },
        { id: uniqueId('todo-'), label: 'Research', done: false }
      ],
      DoneItems: [],
      isall: false
    };
  },
  computed: {
    show() {
      if(this.isall)
        return this.TodoItems;
      else
        return this.TodoItems.filter(n => n.done === false);
    },
    listSummary() {
      const numberFinishedItems = this.ToDoItems.filter((item) =>item.done).length
      return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
    }
  },
  methods: {
    addTodo(toDoLabel) {
      this.TodoItems.push({ id: uniqueId('todo-'), label: toDoLabel, done: false });
    },
    show_all() {
      if (this.isall == false)
        this.isall = true;
      else
        this.isall = false;
    },
    delete_all() {
      if(this.TodoItems.length>0){
        this.TodoItems.splice(0, this.TodoItems.length);
        alert('Delete all items!')
      }
    },
    updateDoneStatus(id) {
      this.TodoItems.forEach((i) => { if (i.id == id) { i.done == true ? i.done = false : i.done = true } });
    },
    itemEdit(id, newlabel) {
      this.TodoItems.forEach((i) => { if (i.id == id) { i.label = newlabel } });
    },
    deleteItem(id) {
      for (let i = 0; i < this.TodoItems.length; i++){
        if()
      }
    }
  }
};
</script>

<style>

  /* Global styles */
  .items_count {
    font-weight: bolder;
    color: #b99595;
    font-size: medium;
    width: 50px;
  }
  .btn {
    padding: 0.8rem 1rem 0.7rem;
    border: 0 solid #4d4d4d;
    cursor: pointer;
    text-transform: capitalize;
  }
  .btn__danger {
    color: rgb(235, 64, 12);

  }
  .btn__filter {
    border-color: lightgrey;
  }
  .btn__danger:focus {
    outline-color: #c82333;
  }
  [class~=btn__primary] {
    color: rgb(247, 247, 247);
    background-color: rgb(3, 3, 3);
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .btn-group > * {
    flex: 1 1 auto;
  }
  .btn-group > * + * {
    margin-left: 0.8rem;
  }
  .label-wrapper {
    margin: 0;
    flex: 0 0 100%;
    text-align: center;
  }
  [class*="__lg"] {
    display: inline-block;
    width: 100%;
    font-size: 1.9rem;
  }
  [class*="__lg"]:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 620px) {
    [class*="__lg"] {
      font-size: 2.4rem;
    }
  }
  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  [class*="stack"] > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  .stack-small > * + * {
    margin-top: 1.25rem;
  }
  .stack-large > * + * {
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 550px) {
    .stack-small > * + * {
      margin-top: 1.4rem;
    }
    .stack-large > * + * {
      margin-top: 2.8rem;
    }
  }
  /* End global styles */
  #app {
    background: #fff;
    margin: 2rem 0 4rem 0;
    padding: 1rem;
    padding-top: 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 550px) {
    #app {
      padding: 4rem;
    }
  }
  #app > * {
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }
  #app > form {
    max-width: 100%;
  }
  #app h1 {
    display: block;
    min-width: 100%;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }

</style>
