import React from 'react';
import styles from './HomePage.scss';
import CSSModules from 'react-css-modules';
import Header from '../../components/header/header.jsx';
import Navigation from '../../components/navigation/navigation.jsx';
import Section from '../../components/section/section.jsx';
import Features from '../../components/features/features.jsx';
import Inject from '../../components/inject/inject.jsx';
import About from '../../components/about/about.jsx';
import TranslatedX from '../../components/translatedx/translatedx.jsx';
/**
 * TODO
 * Wrapp all components exept NAvigation into wrapper which will be translatedX
 * on navigation expanded
 * menu will be always shown but under the hood
 */
export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      translate: false
    }
    this.expandHandler = this.expandHandler.bind(this)
  }
  expandHandler(collapsed) {
    console.log('expandHandler', collapsed)
    var delay=((collapsed)=>collapsed?300:0)(collapsed);
setTimeout(()=>{
  this.setState({
    translate: !collapsed
  }, this.check)
},delay)

  }
  check() {
    console.log('CHECK', this.state)
  }
  render() {
    return (
      <div>
        <Navigation expand={this.expandHandler}/>

        <TranslatedX translate={this.state.translate}>

          <Header/>
          <Features/>
          <Inject/>
          <About/>

        </TranslatedX>

      </div>
    )
  }
}

export default CSSModules(HomePage, styles, {allowMultiple: true});
