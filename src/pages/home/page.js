import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigateTo, ResetTo } from '../../router/actions';
import { SetLearnhelper } from '../../auth/actions';

import {
  ContainerView,
  WelcomeText,
  InstructionsText,
} from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  async componentWillMount() {
    const { learnhelper } = this.props;
    try {
      const courses = await learnhelper.getCourseList();
      this.setState({ courses });
      console.log(courses);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { dispatch } = this.props;
    return (
      <ContainerView>
        <TouchableOpacity
          onPress={() => {
            dispatch(SetLearnhelper(null));
            dispatch(ResetTo('login'));
          }}
        >
          <WelcomeText>
            Logout
          </WelcomeText>
        </TouchableOpacity>
        {this.state.courses.map(course => (
          <InstructionsText
            key={course._courseID}
            onPress={() => dispatch(NavigateTo('course', { course }))}
          >
            {course.courseName}
          </InstructionsText>
        ))}
      </ContainerView>
    );
  }
}
