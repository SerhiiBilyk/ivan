import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.scss';
import PropTypes from 'prop-types';



class Button extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    var {theme,text}=this.props;
    return (
      <button styleName={`button ${theme}`}>{text}</button>
    )
  }
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  text:PropTypes.string.isRequired
};

export default CSSModules(Button, styles,{allowMultiple: true})
