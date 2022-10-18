<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="new-todo-input">What needs to done?</label>
      <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim="islabel" />
      <button type="submit">Add</button>
    </form>

  </div>
</template>

<script>

export default {
  props: {
    label: {required: true, default: '', type: String}
  },
  methods: {
    onSubmit() {
      this.$emit('todo-added', this.islabel);

    }
  },

  data() {
    return {
      islabel: this.label
    };
  }
};

</script>

<style>
  form{
    color: black;
  }

</style>
