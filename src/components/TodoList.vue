<template>
  <div>
    <transition-group name="list" tag="ul">
          <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
              <span  v-bind:class="{textCompleted: todoItem.completed}" 
              v-on:click="toggleComplete({todoItem, index})">
                (체크)
              </span>
              <!-- todoItem.completed 이 ture 일때 textCompleted Class 삽입 -->
              <span v-bind:class="{textCompleted: todoItem.completed}">
                  {{todoItem.item}}
              </span>
              <button v-on:click="removeTodo({todoItem, index})">삭제</button>
          </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'


export default {
    methods: {

        ...mapMutations({
            removeTodo : 'removeOneItem',
            toggleComplete : 'toggleOneItem'
        }),

        // removeTodo: function(todoItem, index){
        //     const obj = {todoItem,index}
        //     this.$store.commit('removeOneItem',obj);
        // },
        // toggleComplete: function(todoItem,index){
        //     const obj = {todoItem,index}
        //      this.$store.commit('toggleOneItem',obj)
        // }
    },
    computed: {
        ...mapGetters(['storedTodoItems'])
    }
   
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
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>