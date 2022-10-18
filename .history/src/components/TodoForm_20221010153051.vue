<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="new-todo-input">What needs to done?</label>
      <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim="label" />
      <button type="submit">Add</button>
    </form>

  </div>
</template>

<script>
import { emit } from 'process';

export default {
  methods: {
    onSubmit() {
      this.@emit('todo-added')
    }
  },
  data() {
    return {
      label: ''
    };
  }
};

</script>

<style>
  form{
    color: black;
  }

</style>
