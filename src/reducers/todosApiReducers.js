import _ from "lodash"

export function todosApiReducers(state=[], action){
  switch(action.type){
    case "GET_TODOS":
    return [...action.payload.data.todos]
    break;
    case "DELETE_TODO":
    const originalTodos = [...state]
    const id = action.payload.data.todo._id
    const result = originalTodos.filter((obj)=>{
      return obj._id !== id
    })
    return result
    break;
    case "ADD_TODO":
    return [...state,action.payload.data]
    break;
  }
  return state
}
