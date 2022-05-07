import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import StateBar from './components/StateBar';
import NotifBanner from './components/NotifBanner';
import TableProduct from './components/Table';
import ListProduct from './components/Table';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Logistic from './Pages/Logistic';
import RegistrationForm from './Pages/RegistrationForm';

function App() {
  return (
    <div>
      <Header />

      <Router>
        <StateBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Cart" />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Payment' element={<Payment />} />
          <Route path='/Logistic' element={<Logistic />} />
          <Route path='/RegistrationForm' element={<RegistrationForm />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
