import { connect } from 'react-redux';

import Page from './page';

const mapStateToProps = state => ({
  learnhelper: state.auth.learnhelper,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

Page.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
