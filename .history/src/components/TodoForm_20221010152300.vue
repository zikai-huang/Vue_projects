<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="new-todo-input">What needs to done?</label>
      <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model="label" />
      <button type="submit">Add</button>
    </form>

  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log('form')
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
