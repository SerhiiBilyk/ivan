import React from 'react';
import styles from './Navigation.scss';
import CSSModules from 'react-css-modules';
import Link from '../global/link/link.jsx';

import Logo from './logo/logo.jsx';
import Hamburger from './hamburger/hamburger.jsx';
import dropDownState from '../global/dropDownCSSGenerator.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../actions/dropdown.js';

var navitems = [
  'Home',
  'Team',
  'About',
  'Testimonials',
  'Contact',
  'Offers'
]
/**
 * [this.state description]
 * @type {Boolean} collapsed - dropdown setState
 * @type {Boolean} initial - does dropdown in initial state or not
 * @type {Boolean} willChange - apply
 */
export class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handlerHamburger = this.handlerHamburger.bind(this);
    this.resetState = this.resetState.bind(this)
  }
  componentWillUnmount() {
    this.removeListener()
  }
  /**
   * If dropdown menu expanded and user stretches the window, hamburger and menu will collapse,
   * after that we remove listener
   */
  resetState() {
    if (window.innerWidth > 400) {
      this.props.resetDropdownState();
      this.removeListener();
    }
  }
  removeListener() {
    window.removeEventListener("resize", this.resetState);
  }
  handlerHamburger() {
    this.props.changeDropdownState();
    this.addListener();
  }
  /**
   * If drop down menu expanded we add 'resize' eventListener
   * If dropdown menu collapsed we must after 1s css animation return to initial state
   */
  addListener() {
    const {collapsed} = this.props;
    collapsed && window.addEventListener("resize", this.resetState);
  }
  render() {
    const {collapsed, initial} = this.props;
    const css = dropDownState(collapsed, initial);
    return (
      <div styleName={`navigation ${css}`}>
        <div styleName='mask'>
          <div styleName='logo'>
            <Logo/>
          </div>
          <div styleName='hamburger'>
            <Hamburger change={this.handlerHamburger} collapsed={collapsed}/>
          </div>
        </div>
        <nav styleName='nav' role='navigation' aria-label='main menu'>
          <ul role='menubar'>
            {navitems.map((elem, index) => {
              return (
                <li key={index} role='none' styleName={`navitem`}>
                  <Link role='menuitem' to={`/${elem.toLowerCase()}`}>{elem}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AppActions, dispatch);
function mapStateToProps(state) {
  var {collapsed, initial} = state.navigationReducer;
  return {collapsed: collapsed, initial: initial}
}
const CSSModule = CSSModules(Navigation, styles, {allowMultiple: true});
var Navigation_ = connect(mapStateToProps, mapDispatchToProps)(CSSModule)
export default Navigation_;
