<template>
  <div>
    <form>
      <h2 class="label-wrapper">
        <label for="new-todo-input" class="label__lg">What needs to do?</label>
        <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.trim="label" class="input__lg" ref="input" />
        <button type="submit" class="btn btn__primary btn__lg" @click.prevent="onSubmit">+</button>
      </h2>
    </form>
  </div>
</template>

<script>

export default {
  methods: {
    onSubmit() {
      if(this.label!=='')
        this.$emit('todoAdded', this.label);
      this.label = '';
    }
  },
  data() {
    return {
      label: ''
    };
  },
  mounted() {
    this.$refs.input.focus();
  }
};

</script>

<style>
  form{
    color: rgb(187, 25, 25);
  }

</style>
