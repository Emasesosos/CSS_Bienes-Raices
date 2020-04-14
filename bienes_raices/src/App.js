import React , { Fragment } from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Contenido from './components/Contenido/Contenido';
import Footer from './components/Footer/Footer';
import './css/app.css';

function App() {
  return (
    <Fragment>
      <Header/>
      <Section/>
      <Contenido/>
      <Footer/>
    </Fragment>
  );
}

export default App;
