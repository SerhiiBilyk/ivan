import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation.jsx';
import Button from '../global/button/button.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <header styleName='header'>

        <div styleName='header-content'>
          <h2 styleName='heading'>Make the best of your WordPress experience with Zerif Lite</h2>
          <div styleName='align'>
            <Button theme='green' text='features'/>
            <Button theme='red' text='download'/>
          </div>
        </div>
      </header>
    )
  }
}

export default CSSModules(Header, styles)
