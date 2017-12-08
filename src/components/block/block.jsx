import React from 'react';
import styles from './block.scss';
import CSSModules from 'react-css-modules';


export  class Block extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='block'>
        {this.props.children}
      </div>
    )
  }
}


export default CSSModules(Block, styles, {allowMultiple: true});
