export function postBook(book){
  return {
    type: "POST_BOOK",
    payload: book
  }
}
