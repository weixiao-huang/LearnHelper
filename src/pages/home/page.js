import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

export default ({ dispatch }) => (
  <ContainerView>
    <WelcomeText>
    Welcome to Learn Helper!
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
        Go Back To Login
      </WelcomeText>
    </TouchableOpacity>
  </ContainerView>
);
