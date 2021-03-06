import React from 'react';
import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM Naming convention in CSS
    <div className="app">
      < Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
