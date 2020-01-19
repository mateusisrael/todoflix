import React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import MyList from './components/MyList';
import AddFilmeModal from './components/AddFilmesModal';


function App() {
  return (
    <div className="App">
      <body>
      <Appbar/>
        <div className="capa"></div>
        <MyList/>
      </body>
    </div>
  );
}

export default App;
