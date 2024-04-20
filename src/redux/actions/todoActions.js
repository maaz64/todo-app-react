
// Action constants.

export const ADD_TODO="ADD Todo";
export const TOGGLE_TODO="Toggle Todo";
export const REMOVE_TODO="Remove Todo";

// Action Creators
export const addTodo = (text)=>({text, type:ADD_TODO});
export const toggleTodo = (index)=>({index, type: TOGGLE_TODO});
export const removeTodo = (index)=>({index, type: REMOVE_TODO});