import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Field } from 'redux-form';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

const Input = ({ input, ...inputProps }) => (
  <View>
    <TextInput
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  </View>
);

export default class Login extends Component {
  submit = values => this.props.loginAction(values.username, values.password)

  renderForm = () => {
    const { handleSubmit } = this.props;
    return (
      <View>
        <Field
          name="username"
          component={Input}
          placeholder="username"
          autoCapitalize="none"
        />
        <Field
          name="password"
          component={Input}
          placeholder="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={handleSubmit(this.submit)}
        >
          <WelcomeText>
            Login
          </WelcomeText>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { dispatch } = this.props;
    const pageContent = this.renderForm();
    return (
      <ContainerView>
        <WelcomeText>
          Please Login
        </WelcomeText>
        <InstructionsText>
          To get started, edit index.ios.js
          Edit Edit Edit
        </InstructionsText>
        <InstructionsText>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </InstructionsText>
        <TouchableOpacity onPress={() => dispatch({ type: 'NAVIGATE_TO', routeName: 'welcome' })}>
          <WelcomeText>
            Go to Home
          </WelcomeText>
        </TouchableOpacity>
        { pageContent }
      </ContainerView>
    );
  }
}
