import React from 'react';
import styles from './about.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';

var CircleDiagramsConfig = [
  {
    name: 'WordPress',
    percentage: 66,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }, {
    name: 'HTML5',
    percentage: 82,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }, {
    name: 'CSS3',
    percentage: 41,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }
]

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: ['item-1', 'item-2', 'item-3']
    }
  }
  shouldComponentUpdate(){
    return false;
  }
  render() {
    var circles = CircleDiagramsConfig.map((elem, index) => {
      return (
        <div key={index} styleName='circle'>
          <div styleName='container' per={`${elem.percentage}%`}>
            <div styleName={`pie ${this.state.animation[index]}`}></div>
          </div>
          <div>
            <p styleName='name'>{elem.name}</p>
            <p styleName='text'>{elem.text}</p>
          </div>
        </div>
      )
    })
    return (
      <div styleName='about'>
        <Block>
          <Container>
            <Title text='about' theme='white' legend='Use this section to showcase important details about your business.'/> {circles}
          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(About, styles, {allowMultiple: true});
