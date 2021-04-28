import React from 'react';
import './App.css';
import Front from './Front';
import Planche from './Planche';
import Handstand from './Handstand';
import Home from './Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
 class App extends React.Component{
   render(){
  return (
    <div className='principal'>
      <BrowserRouter>
      <Route exact path='/' component={Home} />
     <Route exact path='/front' component={Front} />
     <Route exact path='/planche' component={Planche}/>
     <Route exact path='/handstand' component={Handstand}/>
     </BrowserRouter>
     </div>
  );
}
 }

export default App;
