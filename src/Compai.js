import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';

const Compai = (props) => {
  return (
    <div>
     <h1>Homepage</h1>
     <Route exact path="/about" component={About} />
    </div>
  )
}

export default Compai;