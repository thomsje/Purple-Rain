import React, { Component } from 'react';
import {
BrowserRouter as Router,
Route,
Link
}from 'react-router-dom';

// components
import Header from './header';
import Footer from './footer';
import Nav from './nav';
import Dsb from './dsb'
import Nirvana from './nirvana';
import Magic from './magic';



// includes
import './default.scss';


class App extends Component {
render(){
  return(
    <Router>
    <div className="App">

        <Header />
        <Nav />
        <Route exact path='/Dsb' component={Dsb} />
        <Route exact path='/Nirvana' component={Nirvana} />
        <Route exact path='/Magic' component={Magic} />



      <Footer />

    </div>
    </Router>
  );
 }
}
export default App;
