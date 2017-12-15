import React from 'react';
import styles from './translatedx.scss';
import CSSModules from 'react-css-modules';

import dropDownState from '../global/dropDownCSSGenerator.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../actions/dropdown.js';

//    const dropDownState = ((collapsed,initial) => !initial? 'initial': collapsed ? 'collapsed': 'expanded')(collapsed,initial)

export class TranslatedX extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {collapsed, initial} = this.props;
    const css = dropDownState(collapsed, initial);
    return (
      <div styleName={`translatedx ${css}`}>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {collapsed, initial} = state.navigationReducer
  return {collapsed: collapsed, initial: initial}
}
const CSSModule = CSSModules(TranslatedX, styles, {allowMultiple: true});
var TranslatedX_ = connect(mapStateToProps)(CSSModule)
export default TranslatedX_;
