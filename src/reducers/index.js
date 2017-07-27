import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import {booksReducers} from './booksReducers'
import {activeBookReducers} from './activeBookReducers'
import {formDataReducer} from './formDataReducer'
import {authReducer} from './authReducer'
import {todosApiReducers} from './todosApiReducers'
import {socketsReducers} from './socketsReducers'

const rootReducer = combineReducers({
  sockets: socketsReducers,
  books: booksReducers,
  activeBook: activeBookReducers,
  formData: formDataReducer,
  form: formReducer,
  auth: authReducer,
  todos: todosApiReducers,
});

export default rootReducer;
