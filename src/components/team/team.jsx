import React from 'react';
import styles from './team.scss';
import CSSModules from 'react-css-modules';
import {Block, Title, Container} from '../global/combined.jsx';
import {config} from '../global/config.js';

const {team}=config;
export class Team extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='team'>
        <Block>
          <Container>
            <Title {...team.title}/>
            <span>Team</span>
          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(Team, styles, {allowMultiple: true});
