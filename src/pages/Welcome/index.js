import React from 'react';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

user = {username:'!!USERNAME HERE!!',getPassword:()=>"!!PASSWORD HERE!!"}

var learn_helper = new thulib.LearnHelperUtil(user)
learn_helper.login();
var courses = learn_helper.getCourseList();
courses.then((result) => {console.log(result)}).catch((err) => {console.log(err)})

export default () => (
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
