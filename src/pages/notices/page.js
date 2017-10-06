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
      notices: [],
    };
  }

  async componentWillMount() {
    const { learnhelper, navigation: { state: { params: { course } } } } = this.props;
    try {
      const notices = await learnhelper.getNotices(course);
      this.setState({ notices });
      console.log(notices);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <ContainerView>
        {this.state.notices.map(item => (
          <InstructionsText
            key={item._courseID}
          >
            {item.title}
          </InstructionsText>
        ))}
      </ContainerView>
    );
  }
}
