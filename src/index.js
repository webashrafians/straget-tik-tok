import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header'


const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path='/upload' component={Upload} />
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}


ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
