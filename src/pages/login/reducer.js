import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './types';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState,
        requesting: true,
        messages: [{ body: 'Logging in...', time: new Date() }],
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        successful: true,
      };
    case LOGIN_ERROR:
      return {
        ...initialState,
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
      };
    default:
      return state;
  }
};
