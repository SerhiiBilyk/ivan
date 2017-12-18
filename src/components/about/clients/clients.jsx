import React from 'react';
import styles from './clients.scss';
import CSSModules from 'react-css-modules';

export class Clients extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    var {image,alt} = this.props;
    return (
      <li styleName='client'>
        <img src={image} alt={alt} />

      </li>
    )
  }
}

export default CSSModules(Clients, styles, {allowMultiple: true});
