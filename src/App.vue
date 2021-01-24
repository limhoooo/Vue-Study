<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  data: function(){
        return {
            todoItems: [],
        }
    },
    methods:{
      addOneItem: function(todoItem){
         let obj = {completed: false, item: todoItem};
         // 저장하는 로직
         localStorage.setItem(todoItem , JSON.stringify(obj));
         this.todoItems.push(obj);
      },
      removeOneItem: function(todoItem, index){
        // Key 값 으로 로컬스트리지 데이터 remove
            localStorage.removeItem(todoItem.item);
            // 실시간 반영을 위해 data 에서도 삭제 
            this.todoItems.splice(index,1);
      },
      toggleOneItem: function(todoItem,index){
        this.todoItems[index].completed = !this.todoItems[index].completed
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItem: function(){
        localStorage.clear();
        this.todoItems = [];
      }
    },
   // 라이프사이클 : created
    // 인스턴스가 생성되자마자 호출되는 라이프사이클 훅
    created: function(){
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
               // console.log(this.todoItems);
            }
        }
    },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>