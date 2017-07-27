export function formDataReducer(state=[], action){
  switch(action.type){
    case "ADD_FORM_DATA":
    return [...state, action.payload]
    break;
  }
  return state
}
