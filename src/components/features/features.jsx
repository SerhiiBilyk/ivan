import React from 'react';
import styles from './features.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';
import {imageGenerator} from '../global/imgGenerator.js';

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

export class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='features'>
        <Block>
          <Container>
            <Title text='features' legend='What makes this single-page WordPress theme unique.'/>
            <ul>
              {content.map((elem, index) => {
                var {name, description} = elem;
                return (
                  <li key={index} styleName='cell'>
                      <div styleName='img'>
                        <div styleName={`anim index-${index+1}`}></div>
                        <img src={images[index]}/>
                      </div>
                    <div styleName={`title index-${index+1}`}>
                      <h3 styleName='name'>{name}</h3>
                    </div>
                    <p styleName='desc'>{description}</p>
                  </li>
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
