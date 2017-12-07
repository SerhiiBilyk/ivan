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
export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      initial: false,
      willChange: false
    }
    this.handlerHamburger = this.handlerHamburger.bind(this);
    this.updateHamburger = this.updateHamburger.bind(this)
  }
  componentWillUnmount() {
    this.removeListener()
  }
  /**
   * If dropdown menu expanded and user stretches the window, hamburger and menu will collapse,
   * after that we remove listener
   */
  updateHamburger() {
    if (window.innerWidth > 300) {
      this.setState({
        collapsed: true,
        initial: false,
        willChange: false
      }, this.removeListener)
    }
  }
  removeListener() {
    window.removeEventListener("resize", this.updateHamburger);
  }
  handlerHamburger() {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed,
        initial: true,
        willChange: !prevState.willChange
      }
    }, this.resetDropDownState)
  }
  /**
   * If drop down menu expanded we add 'resize' eventListener
   * If dropdown menu collapsed we must after 1s css animation return to initial state
   */
  resetDropDownState() {
    !collapsed && window.addEventListener("resize", this.updateHamburger);
    const {collapsed, initial} = this.state;
    if (collapsed && initial) {
      setTimeout(() => {
        this.setState({initial: false})
      }, 1000)
    }
  }
  render() {
    const {collapsed, initial, willChange} = this.state;
    const dropDownState=((state)=>!state.initial?'initial':state.collapsed?'collapsed':'expanded')(this.state)
    /*Always remember to remove the will-change property when you’re finished using it. */
     const cssPerformance=((wl)=>wl ? 'willChange' : 'auto')(willChange)
    return (
      <div styleName={`navigation ${dropDownState}`}>
        <div styleName='back'></div>
        <div styleName='logo'>
          <Logo/>
        </div>
        <nav styleName={`nav ${cssPerformance}`} role='navigation' aria-label='main menu'>
          <ul role='menubar'>
            {navitems.map((elem, index) => {
              return (
                <li key={index} role='none' styleName='navitem'>
                  <Link role='menuitem' to={`/${elem.toLowerCase()}`}>{elem}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div styleName='hamburger'>
          <Hamburger change={this.handlerHamburger} collapsed={this.state.collapsed}/>
        </div>
      </div>
    )
  }
}

export default CSSModules(Navigation, styles, {allowMultiple: true});
