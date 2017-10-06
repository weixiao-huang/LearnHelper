import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { LoginRequest } from './actions';

import Page from './page';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  loginAction: bindActionCreators(LoginRequest, dispatch),
});

Page.propTypes = {

};

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps, mapDispatchToProps)(Page));
