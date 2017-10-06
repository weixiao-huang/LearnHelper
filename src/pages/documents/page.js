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
      documents: [],
    };
  }

  async componentWillMount() {
    const { learnhelper, navigation: { state: { params: { course } } } } = this.props;
    try {
      const documents = await learnhelper.getDocuments(course);
      this.setState({ documents });
      console.log(documents);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <ContainerView>
        {this.state.documents.map(item => (
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
