<template>
    <div>
        <input type="checkbox" id="todo-item1" :checked="is" />
        <label for="todo-item1">{{label}}</label>
        <br>
        <input type="checkbox" id="todo-item2" checked="true" />
        <label for="todo-item2">dinner2</label>
    </div>
</template>

<script>
export default {
  props: {
    label: {required: true, type: String},
    done: {default: false, type: Boolean}
  },
  data(){
    return {
      isDone: this.done
    };
  },
  setup () {


      return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
