import React from 'react';
import styles from './section.scss';
import CSSModules from 'react-css-modules';
import Img from '../img/img.jsx';
export  class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Section</h2>
        <div styleName='background'>
          <Img/>
       </div>
    </div>
    )
  }
}


export default CSSModules(Section, styles, {allowMultiple: true});
