<template>
    <div class="custom-checkbox">
        <input type="checkbox" :id="id" :checked="isDone" class="checkbox"/>
        <label :for="id" class="checkbox-label">{{label}}</label>
    </div>
</template>

<script>
export default {
  props: {
    label: {required: true, type: String},
    done: {default: false, type: Boolean},
    id: {required: true, type: String}
  },
  data(){
    return {
      isDone: this.done
    };
  }
}
</script>

<style scoped>
  .custom-checkbox > .checkbox-label {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bolder;
    font-size: 16px;
    line-height: 1.25;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
  }
  .custom-checkbox {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    display: block;
    position: relative;
    min-height: 40px;
    margin-bottom: 10px;
    padding-left: 40px;
    clear: left;
  }

  .custom-checkbox > .checkbox-label {
    font-size: inherit;
    font-family: inherit;
    font-weight: bold;
    line-height: inherit;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 15px 5px;
    cursor: pointer;
    touch-action: manipulation;

  }
  .custom-checkbox > label::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentColor;
    background: transparent;
  }
  .custom-checkbox > input[type="checkbox"]:focus + label::before {
    border-width: 4px;
    outline: 3px dashed #000000;
  }
  .custom-checkbox > label::after {
    box-sizing: content-box;
    content: "";
    position: absolute;
    top: 11px;
    left: 9px;
    width: 18px;
    height: 7px;
    transform: rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    border-top-color: transparent;
    opacity: 0;
    background: transparent;
  }
  .custom-checkbox > input[type="checkbox"]:checked + label::after {
    opacity: 1;
    color: #ee1e02;
  }
  @media only screen and (min-width: 40rem) {
    label,
    input,
    .custom-checkbox {
      font-size: 19px;
      font-size: 1.9rem;
      line-height: 1.31579;
    }
  }
</style>
