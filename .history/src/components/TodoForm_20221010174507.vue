<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2 class="label-wrapper">
        
      </h2>

    </form>

  </div>
</template>

<script>

export default {
  methods: {
    onSubmit() {
      if(this.label!=='')
        this.$emit('todo-added', this.label);
      this.label = '';
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
