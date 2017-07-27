export function getInitialBooksSocket(socket){
  socket.emit('getInitialList')
  return (dispatch)=>{
    socket.on('initialList', (res)=>{
      console.log(res)
      dispatch(initialItems(res))
    })
  }
};
export function initialItems(res){
  return {
    type: "INITIAL_ITEMS",
    payload: res
  }
}
export function addBook(res){
  // type: "INITIAL_ITEMS",
  console.log(res)
  return {
    type: "ADD_ITEM",
    payload: res
  }
}
export function addBookSocket(socket){
  return (dispatch)=>{
    let data = {
      title: new Date().toDateString(),
      completed: false
    }
    socket.emit('addItem', data)
  }
};

export function connectSocket(auth){
  return {
    type: "CONNECT_SOCKET",
    payload: auth
  }
}
export function socketError(error){
  return {
    type: "SOCKET_ERROR",
    payload: error
  }
}
