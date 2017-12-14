import React from 'react';
import styles from './Navigation.scss';
import CSSModules from 'react-css-modules';
import Link from '../global/link/link.jsx';

import Logo from './logo/logo.jsx';
import Hamburger from './hamburger/hamburger.jsx';

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
    this.state = {
      collapsed: true,
      initial: false,
      willChange: false
    }
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
      this.setState({
        collapsed: true,
        initial: false,
        willChange: false
      }, this.removeListener)
    }
  }
  removeListener() {
    window.removeEventListener("resize", this.resetState);
  }
  handlerHamburger() {

      this.setState(prevState => {
        return {
          collapsed: !prevState.collapsed,
          initial: true
        }
      }, this.addListener)


  }
  /**
   * If drop down menu expanded we add 'resize' eventListener
   * If dropdown menu collapsed we must after 1s css animation return to initial state
   */
  addListener() {
    this.props.expand(this.state.collapsed)
    const {collapsed} = this.state;
    !collapsed && window.addEventListener("resize", this.resetState);
  }
  render() {
    const {collapsed, initial, willChange} = this.state;
    console.log('collapsed',collapsed)
    /*A little bit complicated comparison , because 3 dropdown states (initial, collapsed,!collapsed)*/
    const dropDownState = ((state) => !state.initial ? 'initial' : state.collapsed ? 'collapsed' : 'expanded')(this.state)
    /*Always remember to remove the will-change property when you’re finished using it. */
    return (
      <div styleName={`navigation ${dropDownState}`}>
<div styleName='mask'>
        <div styleName='logo'>
          <Logo/>
        </div>
        <div styleName='hamburger'>
          <Hamburger change={this.handlerHamburger} collapsed={this.state.collapsed}/>
        </div>
      </div>
        <nav styleName={`nav`} role='navigation' aria-label='main menu'>
          <ul role='menubar'>
            {navitems.map((elem, index) => {
              return (
                <li key={index} role='none' styleName={`navitem-${index+1}`}>
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

export default CSSModules(Navigation, styles, {allowMultiple: true});
