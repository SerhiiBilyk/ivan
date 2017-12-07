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
    },this.resetDropDownState)
  }
  resetDropDownState(){
  const {collapsed,initial}=this.state;
    if(collapsed&&initial){
      setTimeout(()=>{
        this.setState({
          initial:false
        })
      },1000)
    }
  }
  render() {
    /* Check if you need initial state*/
    const {collapsed,initial}=this.state;
    console.log('collapsed:',collapsed,'\ninitial:',initial)
    var dropDownState=(function(state){
      console.log('state',state)
      if(!state.initial){
        return 'initial'
      }
      else if(state.collapsed){
        return 'collapsed'
      }
      else{
        return 'expanded'
      }
    })(this.state)
    return (
      <div styleName={`navigation ${dropDownState}`}>
        <div styleName='back'></div>
        <div styleName='logo'>
          <Logo/>
        </div>
        <nav styleName={`nav`} role='navigation' aria-label='main menu'>
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
