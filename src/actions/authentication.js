import axios from 'axios'


const ROOT_URL = 'https://hidden-escarpment-27993.herokuapp.com/auth'
//const ROOT_URL = 'http://localhost:3009/auth'

export function signInUser(data){

  return function(dispatch){
    dispatch({ type: "AUTH_WAIT" });
    axios.post(`${ROOT_URL}/signin`, data)
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: "AUTH_USER" });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        //browserHistory.push('/feature');
      })
      .catch(() => {
        console.log('error')
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
    }
}
export function authWaiting(){
  return {
    type: "AUTH_WAIT"
  }
}
export function signOutUser(){
  localStorage.removeItem('token');
  return {
    type: "UNAUTH_USER"
  }
}

export function authError(error) {
  return {
    type: "AUTH_ERROR",
    payload: error
  };
}
