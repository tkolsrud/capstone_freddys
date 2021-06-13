import React, { useEffect } from 'react';
import Routes from './config/Routes';
import Nav from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import './App.css';
import UserModel from './models/user';

import { userState } from './recoil/user';
import { useSetRecoilState } from 'recoil';

function App() {
  const setUser = useSetRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem('uid')) {
      UserModel.show().then(json => {
        setUser(json.data);
      });
    }
  }, [setUser]);

  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
