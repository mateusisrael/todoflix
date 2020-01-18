import React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import MyList from './components/MyList';


function App() {
  return (
    <div className="App">
      <Appbar/>
      <body>
        <div className="capa"></div>
        <MyList/>
      </body>
    </div>
  );
}

export default App;
