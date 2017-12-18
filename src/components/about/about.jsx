import React from 'react';
import styles from './about.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';
import Circle from './circles/circles.jsx';
import Client from './clients/clients.jsx';
import {config} from '../global/config.js';
import {imageGenerator} from '../global/imgGenerator.js';
var context = require.context('./clients/img', false, /[0-9]+(.png)$/);
var images = imageGenerator(context, 6, 'png');

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: Array(config.about.circles.length).fill('item').map((el, i) => el + `-${i + 1}`)
    }
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const {about} = config;
    var circles = about.circles.map((elem, index) => <Circle key={index} percents={elem.percents} css={this.state.animation[index]} name={elem.name}/>)
    var main = about.main.map((el, index) =>< p key = {
      index
    } > {
      el
    } < /p>)
    const clients=about.clients.map((el,index)=><Client key={index} alt={el.alt} image={images[index]} / >)
    return (
      <div styleName='about'>
        <Block>
          <Container>
            <Title {...about.title}/>
            <div styleName='content'>
              <div styleName='intro'>
                <p>Everything you see here is responsive and mobile-friendly.</p>
              </div>
              <div styleName='main'>
                {main}
              </div>
              <div styleName='skills'>
                {circles}
              </div>
            </div>
            <ul styleName='clients'>
              {clients}
            </ul>
          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(About, styles, {allowMultiple: true});
