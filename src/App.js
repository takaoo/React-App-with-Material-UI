import React from 'react';
import './App.css';
import Component1 from './components/component1';
import Component2 from './components/component2';
import Header from './components/header';
import Footer from './components/footer';


import Dashboard from './Dashboard';
import Store from './Store';


function App() {
  return (
    <div className="App">
      <Header />
      <Store>
        <Dashboard />
      </Store>
      <Footer />
      {/* <Component1 title="react test1" children="children1" />
      <Component2 title="react test2" children="children2" /> */}
    </div>
  );
}

export default App;
