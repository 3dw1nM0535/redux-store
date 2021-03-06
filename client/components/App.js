//connect our main PhotoGrid components
//redux actionCreators to dispatch various
//user actions such as clicking a like button

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action/actionCreators';
import Main from './Main';

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
