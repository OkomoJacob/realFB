import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM Naming convention in CSS
    <div className="app">
     <h1>Cloning Facebook</h1>
      {/* Header */}
      < Header />
     {/* App Body */}
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
