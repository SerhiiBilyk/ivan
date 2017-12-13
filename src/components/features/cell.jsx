import React from 'react';
import styles from './cell.scss';
import CSSModules from 'react-css-modules';

export class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var {index, name, description, image} = this.props
    return (
      <li   styleName='cell'>
        <div styleName='img'>
          <div styleName={`anim index-${index + 1}`}></div>
          <img src={image}/>
        </div>
        <div styleName={`title index-${index + 1}`}>
          <h3 styleName='name'>{name}</h3>
        </div>
        <p styleName='desc'>{description}</p>
      </li>
    )
  }
}

export default CSSModules(Cell, styles, {allowMultiple: true});
