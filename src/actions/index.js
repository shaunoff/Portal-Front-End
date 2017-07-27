import axios from 'axios'

export function addBook(){
  const date = Date.now()
  return {
    type: "ADD_BOOK",
    payload: {title: date}
  }
};
export function removeBook(){
  return {
    type: "REMOVE_BOOK"
  }
};

export function activateBook(title){
  return {
    type: "ACTIVATE_BOOK",
    payload: title
  }
};
export function addFormData(data){
  return {
    type: "ADD_FORM_DATA",
    payload: data
  }
};

export function getTodos(data){
  const request = axios.get('https://hidden-escarpment-27993.herokuapp.com/todos',{
    headers: {authorization: localStorage.getItem('token')}
  })


  return {
    type: "GET_TODOS",
    payload: request
  }
};
export function deleteTodo(id){
  const request = axios.delete(`https://hidden-escarpment-27993.herokuapp.com/todos/${id}`,{
    headers: {authorization: localStorage.getItem('token') }
  })
  return {
    type: "DELETE_TODO",
    payload: request
  }
};
export function addTodo(text){
  const request = axios.post('https://hidden-escarpment-27993.herokuapp.com/todos',text,
  {
    headers: {authorization: localStorage.getItem('token')}
  })

  return {
    type: "ADD_TODO",
    payload: request
  }
};
export function loginTest(data){
  console.log(data)
  const request = axios.post('https://hidden-escarpment-27993.herokuapp.com/auth/signin', data)
  return {
    type: "LOGIN_TEST",
    payload: request
  }
};
