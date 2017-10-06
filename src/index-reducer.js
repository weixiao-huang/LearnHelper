import { combineReducers } from 'redux';
import nav from './router/reducer';
import login from './pages/login/reducer';

export default combineReducers({
  nav,
  login,
});
