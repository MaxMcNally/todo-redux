import { createStore } from "redux";
const initialState = {
    todos: [],
    filter: null
}
const todoReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TODO":
            console.log("Adding todo")
            console.log(action.payload)
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload)
            })
        case "FINISH":   
            return Object.assign({}, state, {
                todos: state.todos.slice(0).map((todo)=>{
                    if(todo.id === action.payload.id){
                        todo.state = "FINISHED"
                    }
                    return todo
                })
            })
        case "ACTIVATE":   
            return Object.assign({}, state, {
                todos: state.todos.slice(0).map((todo)=>{
                    if(todo.id === action.payload.id){
                        todo.state = "ACTIVE"
                    }
                    return todo
                })
            })
        case "FILTER_BY_ACTIVE": 
            return Object.assign({}, state, {filter : "ACTIVE"})
        case "FILTER_BY_FINISHED":   
            return Object.assign({}, state, {filter : "FINISHED"})
        case "FILTER_BY_ALL":   
            return Object.assign({}, state, {filter : null})
        default: 
            return state    
    }
    

}
const store = createStore(todoReducer)

export default store