import { NavigationActions } from 'react-navigation';

import * as types from './types';

import AppNavigator from './page';

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case types.RESET_TO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({
            routeName: action.routeName,
            params: action.params,
          })],
        }),
        state,
      );
      break;
    case types.GO_BACK:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case types.NAVIGATE_TO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params,
        }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
