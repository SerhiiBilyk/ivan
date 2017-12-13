import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hamburger.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

class Hamburger extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      optimization: 'non'
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)

  }
  clickHandler(e) {
    this.props.change(e)
  }
  mouseEnterHandler() {
    this.setState({optimization: 'willChange'})
  }
  mouseLeaveHandler() {
    this.setState({optimization: 'non'})
  }
  render() {
    var {collapsed} = this.props;
    var {optimization} = this.state;
    console.log('hamburger::render')
    return (
      <ul id="hamburger" styleName={`hamburger ${optimization} ${collapsed ? '': 'expanded'}`}
        onClick={this.clickHandler}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }
}
Hamburger.propTypes = {
  change: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired
}
export default CSSModules(Hamburger, styles, {allowMultiple: true})
