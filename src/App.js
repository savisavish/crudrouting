import logo from './logo.svg';
import './App.css';
import { useState, createContext } from "react";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Covid from './components/pages/Covid';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import UseState_Ex from './components/pages/hooks/UseState_Ex';
import User from './components/pages/User';
import Practice from './components/Practice';
import SignUp from './components/pages/SignUp';
import UseContextHook from './components/pages/hooks/UseContextHook';
import UseReducerHook from './components/pages/hooks/UseReducerHook';
export const UserContext = createContext()
export const ChannelContext = createContext()

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <UserContext.Provider value={'receieved this data from Root componnent'}>
          <ChannelContext.Provider value={''}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/covid" element={<Covid />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/users/add" element={<AddUser />} />
              <Route exact path="/users/edit/:id" element={<EditUser />} />
              <Route exact path="/user/:id" element={<User />} />
              <Route exact path="/usestate" element={<UseState_Ex />} />
              <Route exact path="/hooks/useContext" element={<UseContextHook />} />
              <Route exact path="/hooks/useReducer" element={<UseReducerHook />} />
              <Route path='*' exact={true} element={<PageNotFound />} />
            </Routes>
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>

  );
}

export default App;
