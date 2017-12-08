import React from 'react';
import styles from './title.scss';
import CSSModules from 'react-css-modules';


export  class Title extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    var {text,legend}=this.props
    return (
      <div styleName='header'>
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


export default CSSModules(Title, styles, {allowMultiple: true});
