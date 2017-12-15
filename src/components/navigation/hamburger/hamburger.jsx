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
  }
  clickHandler(e) {
    this.props.change(e)
  }

  render() {
    var {collapsed} = this.props;
    var css=collapsed?'':'expanded';
    return (
      <ul id="hamburger" styleName={`hamburger ${css}`}
        onClick={this.clickHandler}>
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
