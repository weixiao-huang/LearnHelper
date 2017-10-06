import { StackNavigator } from 'react-navigation';

import Login from '../pages/login';
import Home from '../pages/home';
import Course from '../pages/course';
import Documents from '../pages/documents';
import Notices from '../pages/notices';
import Assignments from '../pages/assignments';

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
  course: {
    screen: Course,
    navigationOptions: {
      title: 'Course',
      gesturesEnabled: true,
    },
  },
  documents: {
    screen: Documents,
    navigationOptions: {
      title: 'Documents',
      gesturesEnabled: true,
    },
  },
  notices: {
    screen: Notices,
    navigationOptions: {
      title: 'Notices',
      gesturesEnabled: true,
    },
  },
  assignments: {
    screen: Assignments,
    navigationOptions: {
      title: 'Assignments',
      gesturesEnabled: true,
    },
  },
};

const StackNavigatorConfigs = {
  initialRouteName: 'login',
};

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs);
