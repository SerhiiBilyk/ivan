import React from 'react';
import styles from './logo.scss';
import CSSModules from 'react-css-modules';



export class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='logo'>
        .
      </div>
    )
  }
}

export default CSSModules(Logo, styles, {allowMultiple: true});
