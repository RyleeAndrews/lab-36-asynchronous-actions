'use strict';
// import '../style/main.scss';
import React from 'react';
import {Route} from 'react-router-dom';
import DashBoard from './dashboard.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <main>
          <Route exact path='/' component={DashBoard} />
        </main>
      </div>
    );
  }
}

export default App;
