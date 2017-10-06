import React from 'react';
import styled from 'styled-components/native';
import AppWithNavigationState from './router';

const MainView = styled.View`
  flex: 1;
`;

export default () => (
  <MainView>
    <AppWithNavigationState />
  </MainView>
);
