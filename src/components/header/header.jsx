import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation.jsx';
import Button from '../global/button/button.jsx';


class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header styleName='header'>
        <Navigation/>
        <div styleName='header-content'>
          <h2 styleName='heading'>Make the best of your WordPress experience with Zerif Lite</h2>
          <Button theme='green' text='features'/>
        </div>
      </header>
    )
  }
}

export default CSSModules(Header, styles)
