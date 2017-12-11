import React from 'react';
import styles from './cell.scss';
import CSSModules from 'react-css-modules';

export class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hover: 'non'
    }
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler=this.mouseLeaveHandler.bind(this)
  }
  mouseEnterHandler() {
    setTimeout(()=>{
      this.setState(prevState => {
        /*Browser will need approx. 200ms to apply optimization.
         * add css 'will-change property'
         * https://www.sitepoint.com/introduction-css-will-change-property/*/
        return {hover: 'optimize'}
      })
      console.log('timeout')
    },300)

  }
  mouseLeaveHandler(){
    this.setState(prevState => {
      /*remove css 'will-change property'*/
      return {hover: 'non'}
    })
  }
  render() {
    var {index, name, description, image} = this.props
    return (
      <li onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}  styleName='cell'>
        <div styleName='img'>
          <div styleName={`anim ${this.state.hover} index-${index + 1}`}></div>
          <img src={image}/>
        </div>
        <div styleName={`title index-${index + 1}`}>
          <h3 styleName='name'>{name}</h3>
        </div>
        <p styleName='desc'>{description}</p>
      </li>
    )
  }
}

export default CSSModules(Cell, styles, {allowMultiple: true});
