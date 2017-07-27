export function booksReducers(state=[], action){
  switch(action.type){
    case "ADD_BOOK":
    return [...state, action.payload]
    break;
    case "REMOVE_BOOK":
    let currentArray = [...state]
    currentArray.pop()
    return currentArray
    break;
  }
  return state
}
