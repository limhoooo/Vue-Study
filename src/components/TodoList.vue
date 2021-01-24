<template>
  <div>
      <ul>
          <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
              <span  v-bind:class="{textCompleted: todoItem.completed}" 
              v-on:click="toggleComplete(todoItem)">
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
    data: function(){
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index){
            console.log(todoItem, index);
            // Key 값 으로 로컬스트리지 데이터 remove
            localStorage.removeItem(todoItem.item);
            // 실시간 반영을 위해 data 에서도 삭제 
            this.todoItems.splice(index,1)
        },
        toggleComplete: function(todoItem){
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
                console.log(this.todoItems);
            }
        }
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
</style>