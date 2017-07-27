export function activeBookReducers(state={}, action){
  switch(action.type){
    case "ACTIVATE_BOOK":
    return {...state, title: action.payload}
    break;

  }
  return state
}
