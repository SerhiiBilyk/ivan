import React from 'react';
import styles from './translatedx.scss';
import CSSModules from 'react-css-modules';

export class TranslatedX extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('TranslatedX  expand',this.props.translate)
    return (
      <div styleName={`translatedx ${this.props.translate?' move':' none'}`}>
        {this.props.children}
      </div>
    )
  }
}

export default CSSModules(TranslatedX, styles, {allowMultiple: true});
