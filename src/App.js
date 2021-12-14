import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import Top from './components/Top';
import Bottom from './components/Bottom';
import React, { useState } from 'react';

function App() {
  return (
    <div className="container">
      <h1>홈홈</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
