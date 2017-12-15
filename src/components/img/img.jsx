import React from 'react';
import styles from './img.scss';
import CSSModules from 'react-css-modules';
import img from './img/parallax.jpg';



export  class Img extends React.Component {
  constructor(props) {
    super(props);
    this.loaderHandler=this.loaderHandler.bind(this)
  }
  loaderHandler(e){
  }
  render() {
    return (
      <div>
        <img onLoad={this.loaderHandler} src={img} />
      </div>
    )
  }
}
export default CSSModules(Img, styles, {allowMultiple: true});
