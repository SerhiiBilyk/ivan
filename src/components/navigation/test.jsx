import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './test.scss';
import Wrapper from '../wrapper.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../actions/change.js';

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {childIds, id} = this.props;
    console.log('outer props',this.props)
    return (
      <ul>
        {childIds.length>0?childIds.map(childId => {
          const {id} = this.props;
          console.log('inside map',this.props)
          return (
            <li key={childId}>
              <span data-index='inner'>{this.props.name!=='zero'?this.props.name:''}</span>
              <TestWrapper id={childId}/>
            </li>
          )
        }):<li>
          <span data-index='empty'>{this.props.name}</span>
        </li>}
      </ul>
    )

  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AppActions, dispatch);

function mapStateToProps(state, ownProps) {
  console.log('ownProps',ownProps,'\nstate',state.navigationReducer.menu[ownProps.id])
  return  state.navigationReducer.menu[ownProps.id]
}

const CSSModule = CSSModules(Test, styles, {allowMultiple: true});
var TestWrapper = connect(mapStateToProps, mapDispatchToProps)(CSSModule)
export default TestWrapper;
