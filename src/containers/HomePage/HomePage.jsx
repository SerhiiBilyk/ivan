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
  }
  render() {
    return (
      <div>
        <Navigation/>
        <TranslatedX>
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
