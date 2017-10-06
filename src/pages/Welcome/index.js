import { connect } from 'react-redux';

import Page from './page';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

Page.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
