import React from 'react';
import './App.css';
import CheckeredBox from './Components/boxForm';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <div className="row">
          <div className="col s12"><CheckeredBox/></div>
        </div>
      </div>
    );
  }
}


export default App;
