import React from 'react';
import styles from './features.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';
import {imageGenerator} from '../global/imgGenerator.js';
import Cell from './cell.jsx';
import {config} from '../global/config.js';
var context = require.context('./img', false, /[0-9]+(.png)$/);
var images = imageGenerator(context, 4, 'png');

const {features} = config;

/**
 * css .anim class has unremovable will-change property,
 * you need to switch this property
 */
export class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    var {text, theme, legend} = features.title
    const content=features.content.map((elem, index) => <Cell index={index} key={index} image={images[index]} {...elem}/>)
    return (
      <div styleName='features'>
        <Block>
          <Container>
            <Title {...features.title}/>
            <ul>
              {content}
            </ul>
          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(Features, styles, {allowMultiple: true});
