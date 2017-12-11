import React from 'react';
import styles from './title.scss';
import CSSModules from 'react-css-modules';

import PropTypes from 'prop-types';

export  class Title extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    var {text,legend,theme}=this.props
    return (
      <div styleName={`header ${theme}`}>
      <h2 styleName='title'>
        {text}
      </h2>
      <p styleName='legend'>
        {legend}
      </p>
    </div>
    )
  }
}
Title.propTypes = {
  theme: PropTypes.string.isRequired,
  text:PropTypes.string.isRequired,
  legend:PropTypes.string.isRequired
};

export default CSSModules(Title, styles, {allowMultiple: true});
