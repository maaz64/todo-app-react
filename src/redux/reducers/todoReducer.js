
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todoActions";

// initialising the state
const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}


// creating reducers for different action
export function todoReducer(state=initialState, action){

    switch(action.type){
        // reducer for adding todo inside the array
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            // reducer for toggling the completion of a task using index 
            return{
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i==action.index){
                        todo.completed=!todo.completed
                    }
                    return todo;
                })
            }
        case REMOVE_TODO:
            // reducer for deleting todo from the todos array using splice method
            state.todos.splice(action.index,1)
            return{
                ...state,
                todos: [...state.todos]
            }
        default:
            return state;
    }
}