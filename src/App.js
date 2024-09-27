import React, { useState } from 'react';
import LoginScreen from './components/loginScreen/LoginScreen.js';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/homescreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route ,Redirect, Navigate} from 'react-router-dom'; // Updated import for Routes
import './_app.scss';

// for node sass i have used "npm install -g mirror-config-china --registry=https://registry.npmmirror.com" this.
const Layout = ({ children }) => {
  const [sidebar, setsidebar] = useState(false);
  const togglesidebar = () => setsidebar((value) => !value);

  return (
    <>
      <Header togglesidebar={togglesidebar} />
      <div className="app-container">
        <Sidebar sidebar={sidebar} togglesidebar={togglesidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>

      <Routes> {/* Wrap Route components inside Routes */}
        <Route 
          path="/" 
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          } 
          />
        <Route 
          path="/auth" 
          element={<LoginScreen />} 
          />
        <Route 
          path="/search" 
          element={
              <Layout>
              <h1>Searching</h1>
            </Layout>
          } 
        />
        <Route path='*' element={<Navigate to="/"/>}
        />
           
        
      </Routes>
    </Router>
  );
};

export default App;
