import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import styled from 'styled-components';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <MainWrapper>
            <Route
              exact path='/'
              render={() => (<Redirect to='login' />)}
            />
            <Route
              path='/login'
              component={Login}
            />
            <Route
              path='/register'
              component={Register}
            />
          </MainWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
