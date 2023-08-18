import React from 'react';

import routesConfig from './routers/routesConfig';
import { Route } from 'react-router';
import { BrowserRouter, Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import styles from './App.module.css'


function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {routesConfig.map((route, index) =>(
          <Route 
          key={index}
          path={route.path}
          element={route.element}></Route>
          ))}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
