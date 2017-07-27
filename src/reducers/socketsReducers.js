export function socketsReducers(state={items: []}, action){


  switch(action.type){
    case "CONNECT_SOCKET":
      return {...state, socket: action.payload}
      break;
    case "ADD_ITEM":
      const items = [...state.items,action.payload]
      return {...state,items}
      break;
    case "INITIAL_ITEMS":
      return {...state, items: [...action.payload]}
      break;
    case "SOCKET_ERROR":
        return {...state, error: action.payload}
        break;
  }
  return state
}
