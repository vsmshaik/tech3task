import React from 'react';
import './App.css';

import { Layout } from 'antd';
import Home from './pages/Home'
import NavBar from './component/NavBar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
const { Header, Footer,  Content } = Layout;

function App() {
  return (

      <Router>
  <Switch>
    <Layout>
      <Header><NavBar /></Header>
      <Content style={{marginTop:"20px"}}>
        <Route path="/"  exact> <Home/></Route>
        </Content>
      <Footer>Footer</Footer>
    </Layout>
    </Switch>
    </Router>
  );
}

export default App;
