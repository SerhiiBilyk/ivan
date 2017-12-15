import React from 'react';
import styles from './inject.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';
import Button from '../global/button/button.jsx';

export  class Inject extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(){
    return false;
  }
  render() {
    return (
      <div styleName='inject'>
        <Block>
          <Container>
            <p>Hello</p>
            <Button theme='green' text='click'/>
          </Container>
        </Block>
      </div>
    )
  }
}


export default CSSModules(Inject, styles, {allowMultiple: true});
