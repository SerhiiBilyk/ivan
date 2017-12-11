import React from 'react';
import styles from './about.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';


export class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='about'>
        <Block>
          <Container>
            <Title text='about' theme='white' legend='Use this section to showcase important details about your business.'/>

          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(About, styles, {allowMultiple: true});
