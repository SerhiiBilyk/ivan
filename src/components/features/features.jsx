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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  }, {
    name: 'WOOCOMMERCE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'CUSTOM CONTENT BLOCKS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    name: 'GO PRO FOR MORE FEATURES',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  }
]

export class Features extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Block>
          <Container>
            <Title text='features' legend='What makes this single-page WordPress theme unique.'/>
            <ul>
            {content.map((elem,index)=>{
              var {name,description}=elem;
              return(
                <li key={index}>
                  <div>
                    <img src={images[index]}/>
                  </div>
                  <div>
                    <p>{name}</p>
                    <p>{description}</p>
                  </div>
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
