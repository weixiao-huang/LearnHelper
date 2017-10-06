import React from 'react';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

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
