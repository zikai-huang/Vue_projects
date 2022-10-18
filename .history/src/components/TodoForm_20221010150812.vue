<template>
  <div>
    <form>
      <label for="new-todo-input">What needs to done?</label>
      <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" />
      <button :type="submit">Add</button>
    </form>

  </div>
</template>

<script>
  export default {
    methods: {
      onSubmit() {
          console.log('form submitted')
        }
      }
  }
</script>

<style>
  form{
    color: black;
  }

</style>
