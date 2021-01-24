<template>
  <div>
      <ul>
          <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
              <span  v-bind:class="{textCompleted: todoItem.completed}" 
              v-on:click="toggleComplete(todoItem, index)">
                (체크)
              </span>
              <!-- todoItem.completed 이 ture 일때 textCompleted Class 삽입 -->
              <span v-bind:class="{textCompleted: todoItem.completed}">
                  {{todoItem.item}}
              </span>
              <button v-on:click="removeTodo(todoItem, index)">삭제</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['propsdata']
    ,
    methods: {
        removeTodo: function(todoItem, index){

            this.$emit('removeItem',todoItem, index)
            
        },
        toggleComplete: function(todoItem,index){
            this.$emit('toggleItem',todoItem,index)
        }
    },
   
}
</script>

<style>
    ul{
        list-style: none;
    }
    li{
        min-width: 20vw;
        min-height: 2vw;
    }
    .textCompleted{
        color: blue;
    }
</style>