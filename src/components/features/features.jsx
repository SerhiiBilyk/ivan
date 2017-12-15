import React from 'react';
import styles from './features.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';
import {imageGenerator} from '../global/imgGenerator.js';
import Cell from './cell.jsx';
var context = require.context('./img', false, /[0-9]+(.png)$/);
var images = imageGenerator(context, 4, 'png');
console.log('images', images)

var content = [
  {
    name: 'PARALLAX EFFECT',
    description: 'Build a front page for your WooCommerce store in a matter of minutes. The neat and clean presentation will help your sales and make your store accessible to everyone.'
  }, {
    name: 'WOOCOMMERCE',
  description: 'Build a front page for your WooCommerce store in a matter of minutes. The neat and clean presentation will help your sales and make your store accessible to everyone.'  }, {
    name: 'CUSTOM CONTENT BLOCKS',
  description: 'Build a front page for your WooCommerce store in a matter of minutes. The neat and clean presentation will help your sales and make your store accessible to everyone.'  }, {
    name: 'GO PRO FOR MORE FEATURES',
  description: 'Build a front page for your WooCommerce store in a matter of minutes. The neat and clean presentation will help your sales and make your store accessible to everyone.'  }
]
/**
 * css .anim class has unremovable will-change property,
 * you need to switch this property
 */
export class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(){
    return false;
  }
  render() {

    return (
      <div styleName='features'>
        <Block>
          <Container>
            <Title text='features' theme='black' legend='What makes this single-page WordPress theme unique.'/>
            <ul>
              {content.map((elem, index) => {
                var {name, description} = elem;
                return (
                  <Cell index={index} key={index} image={images[index]} {...elem}/>
                )
              })}
            </ul>
          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(Features, styles, {allowMultiple: true});
