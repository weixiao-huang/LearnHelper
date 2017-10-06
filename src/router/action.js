import {
  NAVIGATE_TO,
  RESET_TO,
} from './types';

export const NavigateTo = (routeName, params = {}) => ({
  type: NAVIGATE_TO,
  routeName,
  params,
});

export const ResetTo = (routeName, params = {}) => ({
  type: RESET_TO,
  routeName,
  params,
});
