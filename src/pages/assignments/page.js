import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigateTo } from '../../router/actions';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
    };
  }

  async componentWillMount() {
    const { learnhelper, navigation: { state: { params: { course } } } } = this.props;
    try {
      const assignments = await learnhelper.getAssignments(course);
      this.setState({ assignments });
      console.log(assignments);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <ContainerView>
        {this.state.assignments.map(item => (
          <InstructionsText
            key={item.title}
          >
            {item.title}
          </InstructionsText>
        ))}
      </ContainerView>
    );
  }
}
