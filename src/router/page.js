import { StackNavigator } from 'react-navigation';

import Login from '../pages/login';
import Home from '../pages/home';

const AppRouteConfigs = {
  login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null,
    },
  },
  homeTab: {
    screen: Home,
    navigationOptions: {
      title: 'LearnHelper',
      gesturesEnabled: true,
    },
  },
};

const StackNavigatorConfigs = {
  initialRouteName: 'login',
};

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs);
