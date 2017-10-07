import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigateTo } from '../../router/actions';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

export default ({ dispatch, navigation: { state: { params: { course } } } }) => (
  <ContainerView>
    <InstructionsText
      onPress={() => dispatch(NavigateTo('notices', { course }))}
    >
      课程公告
    </InstructionsText>
    <InstructionsText
      onPress={() => dispatch(NavigateTo('documents', { course }))}
    >
      课程文件
    </InstructionsText>
    <InstructionsText
      onPress={() => dispatch(NavigateTo('assignments', { course }))}
    >
      课程作业
    </InstructionsText>
  </ContainerView>
);
