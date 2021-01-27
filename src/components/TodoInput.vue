<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <button v-on:click="addTodo">add</button>
      <span class="addContainer">

      </span>
  
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고!</h3>
        <h3 slot="body">값을 입력해주세요.</h3>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return{
            newTodoItem : "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
               this.$emit('addTodoItem',this.newTodoItem)
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
            
        },
        clearInput(){
            this.newTodoItem = ''
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    
</style>