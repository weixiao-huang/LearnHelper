import React, { Component } from 'react';
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
  async componentWillMount() {
    console.log('Welcome has been awaked');
    const learnHelper = new thulib.LearnHelperUtil(user);
    learnHelper.login();
    try {
      const courses = await learnHelper.getCourseList();
      console.log(courses);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
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
      </ContainerView>
    );
  }
}
