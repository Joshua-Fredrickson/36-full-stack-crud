import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

export default class App extends React.Component {
  render() {
    return (
        <div className='app'>
          <BrowserRouter>
            <div>
              <h1>Todo App of Happiness</h1>
              <Route exact path='/' compoonent={Dashboard} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}