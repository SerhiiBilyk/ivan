import React from 'react';
import styles from './container.scss';
import CSSModules from 'react-css-modules';


export  class Container extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='container'>
        {this.props.children}
      </div>
    )
  }
}


export default CSSModules(Container, styles, {allowMultiple: true});
