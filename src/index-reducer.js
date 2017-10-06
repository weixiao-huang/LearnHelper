import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from './router/reducer';
import login from './pages/login/reducer';

export default combineReducers({
  nav,
  form,
  login,
});
