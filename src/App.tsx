import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages';
import SigninPage from './pages/signin';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </BrowserRouter>    
      <GlobalStyle />
    </>
  );
}

export default App;
