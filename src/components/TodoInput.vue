<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <button v-on:click="addTodo">add</button>
      <span class="addContainer">

      </span>
  </div>
</template>

<script>
export default {
    data : function(){
        return{
            newTodoItem : ""
        }
    },
    methods: {
        addTodo:function(){
            if(this.newTodoItem !== ''){
               this.$emit('addTodoItem',this.newTodoItem)
                this.clearInput();
            }
            
        },
        clearInput : function(){
            this.newTodoItem = ''
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    
</style>