import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer'; 
import postReducer from './postReducer'; 
import shopingfileReducer from "./shopingfileReducer.js";

import categoriafileReducer from "./categoriafileReducer.js";




export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  shopingfile:shopingfileReducer,
  categoriafile: categoriafileReducer,

});
