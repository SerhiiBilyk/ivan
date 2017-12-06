import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './tree.scss';
import Wrapper from '../wrapper.js';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../actions/change.js';

class Tree extends React.Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)

  }
  increment() {
    const {id} = this.props
    this.props.increment(id)
  }
  showState() {
    console.log('STATE', this.state)
  }

  render() {
    console.log("Tree::render")
    var {childIds} = this.props
    return (
      <div>      
        <span>{this.props.name}/{this.props.counter}</span>
        <button onClick={this.increment}>Click</button>
        <ul>
          {childIds.map(childId => {
            return (
              <li key={childId}>
                <TreeWrapper id={childId}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AppActions, dispatch);
const mapStateToProps=(state, ownProps)=>state.navigationReducer[ownProps.id];

const CSSModule = CSSModules(Tree, styles, {allowMultiple: true});

var TreeWrapper = connect(mapStateToProps, mapDispatchToProps)(CSSModule)
export default TreeWrapper;
