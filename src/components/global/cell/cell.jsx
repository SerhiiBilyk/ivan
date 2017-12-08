import React from 'react';
import styles from './cell.scss';
import CSSModules from 'react-css-modules';


export class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Block>
          <Container>
            <Title text='features' legend='What makes this single-page WordPress theme unique.'/>
          </Container>
        </Block>
      </div>
    )
  }
}

export default CSSModules(Features, styles, {allowMultiple: true});
