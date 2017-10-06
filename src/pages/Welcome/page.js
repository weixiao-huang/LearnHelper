import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import * as thulib from 'thulib';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

const user = {
  username: '!!USERNAME HERE!!',
  getPassword: () => '!!PASSWORD HERE!!',
};

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  async componentWillMount() {
    console.log('Welcome has been awaked');
    const learnHelper = new thulib.LearnHelperUtil(user);
    learnHelper.login();
    try {
      const courses = await learnHelper.getCourseList();
      this.setState({ courses });
      console.log(courses);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { dispatch } = this.props;
    return (
      <ContainerView>
        <WelcomeText>
        Welcome to React Native!
        </WelcomeText>
        <InstructionsText>
          To get started, edit index.ios.js
          Edit Edit Edit
        </InstructionsText>
        <InstructionsText>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </InstructionsText>
        <TouchableOpacity onPress={() => dispatch({ type: 'GO_BACK' })}>
          <WelcomeText>
            Go to Home
          </WelcomeText>
        </TouchableOpacity>
        {this.state.courses.map(item => (
          <InstructionsText key={item.courseID}>
            {item.courseName}
          </InstructionsText>
        ))}
      </ContainerView>
    );
  }
}
