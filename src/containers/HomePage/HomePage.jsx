import React from 'react';
import styles from './HomePage.scss';
import CSSModules from 'react-css-modules';
import Header from '../../components/header/header.jsx';
import Section from '../../components/section/section.jsx';
import Features from '../../components/features/features.jsx';
import Inject from '../../components/inject/inject.jsx';

export  class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Header/>
      <Features/>
      <Inject/>

      </div>
    )
  }
}


export default CSSModules(HomePage, styles, {allowMultiple: true});
