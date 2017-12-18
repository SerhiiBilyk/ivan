import React from 'react';
import styles from './circles.scss';
import CSSModules from 'react-css-modules';

export class Circle extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    var {percents, name, css} = this.props;
    return (
      <div styleName='circle'>
        <div styleName='container' per={`${percents}%`}>
          <div styleName={`pie ${css}`}></div>
          <p styleName='name'>{name}</p>
        </div>
      </div>
    )
  }
}

export default CSSModules(Circle, styles, {allowMultiple: true});
