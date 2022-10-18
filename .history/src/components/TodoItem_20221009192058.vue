<template>
    <div>
        <input type="checkbox" id="todo-item1" checked="false" />
        <label for="todo-item1">dinner1</label>
        <br>
        <input type="checkbox" id="todo-item2" checked="true" />
        <label for="todo-item2">dinner2</label>
    </div>
</template>

<script>
export default {
  props{
    label:{required:true;type:String};
    done:{}


  }
  setup () {


      return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
