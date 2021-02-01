import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
               // console.log(this.todoItems);
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch()
    },
    mutations:{
        addOneItem(state, todoItem){
            let obj = {completed: false, item: todoItem};
            // 저장하는 로직
            localStorage.setItem(todoItem , JSON.stringify(obj));
            state.todoItems.push(obj);
            console.log(state.todoItems);
        },
        removeOneItem(state,obj){
            // Key 값 으로 로컬스트리지 데이터 remove
            localStorage.removeItem(obj.todoItem.item);
            // 실시간 반영을 위해 data 에서도 삭제 
            state.todoItems.splice(obj.index,1);
        },
        toggleOneItem(state,obj){
            state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed
            localStorage.removeItem(obj.todoItem.item);
            localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
        },
        clearAllItem(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});