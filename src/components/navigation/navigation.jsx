import React from 'react';
import styles from './Navigation.scss';
import CSSModules from 'react-css-modules';
import {Link} from 'react-router-dom';
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

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      initial:false
    }
    this.handlerHamburger = this.handlerHamburger.bind(this);
  }
  handlerHamburger() {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed,
        initial:true
      }
    })
  }
  render() {
    /* Check if you need initial state*/
    var {collapsed,initial}=this.state;
    return (
      <div styleName={`navigation ${initial?collapsed?'collapsed':'expanded':'initial'} `} >
        <div styleName='logo'>
          <Logo/>
        </div>
        <nav styleName={`nav `} role='navigation' aria-label='main menu'>
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
