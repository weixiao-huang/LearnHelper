import {
  SET_LEARNHELPER,
} from './types';

const initialState = {
  learnhelper: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LEARNHELPER:
      console.log('learnhelper: ', action.learnhelper);
      return {
        ...state,
        learnhelper: action.learnhelper,
      };
    default:
      return state;
  }
};
