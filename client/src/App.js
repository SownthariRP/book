import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './components/headers/Header';
import Pages from './components/mainpages/Pages';
const App =() => {

  return (
    <DataProvider>
        <div className="App">
          <Router>
            <Header />
            <Pages />
          </Router>
        </div>
      
    </DataProvider>
  );
};

export default App;
