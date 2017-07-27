export function authReducer(state={}, action){
  switch(action.type){
    case "AUTH_USER":
      return { ...state, error: '', authenticated: true, waiting: false };
    break;
    case "AUTH_WAIT":
      return { ...state, waiting: true };
    break;
    case "UNAUTH_USER":
      return { ...state, authenticated: false };
    case "AUTH_ERROR":
      return { ...state, error: action.payload };
    case "FETCH_MESSAGE":
      return { ...state, message: action.payload };
  }
  return state
}
