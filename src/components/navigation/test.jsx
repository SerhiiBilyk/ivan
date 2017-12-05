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
    this.state={
      counter:0
    }
    this.increment=this.increment.bind(this)
  }
  increment(){
    console.log('increment')
    this.setState(prevState=>({counter:prevState.counter+=1}))
  }
  showState(){
    console.log('STATEq',this.state)
  }

  render() {
console.log(this.state)
var {childIds}=this.props
    return (
      <ul>
        {childIds.map(childId => {
          return (
            <li key={childId}>
              <TestWrapper id={childId}/>
              <button>Click</button>
            </li>
          )
        })}
      </ul>
      /*
      <ul>
        {this.props.filter.map(childId => {
          return this.props.menu[childId].childIds.length>0?(
            <li key={childId}>
              <span>{this.props.menu[childId].name}/{this.state.counter}</span>
              <TestWrapper filter={this.props.menu[childId].childIds} id={this.props.menu[childId].id}/>
              <button onClick={e=>this.increment()}>Click</button>
            </li>
          ):(
            <li key={childId}>
              <span data-index={this.props.menu[childId].id}>{this.props.menu[childId].name}</span>
            </li>
          )
        })}
      </ul>
      */
    )

  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AppActions, dispatch);

function mapStateToProps(state,ownProps) {
  //  console.log('ownProps',ownProps,'\nstate',state.navigationReducer.menu[ownProps.id])
  return state.navigationReducer.menu[ownProps.id]//,  filter:ownProps.filter


}

const CSSModule = CSSModules(Test, styles, {allowMultiple: true});
var TestWrapper = connect(mapStateToProps, mapDispatchToProps)(CSSModule)
export default TestWrapper;
