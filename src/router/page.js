import { StackNavigator } from 'react-navigation';

import Login from '../pages/login';
import Home from '../pages/home';
import Welcome from '../pages/Welcome';

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
  welcome: {
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome',
      gesturesEnabled: true,
    },
  },
};

const StackNavigatorConfigs = {
  initialRouteName: 'login',
};

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs);
