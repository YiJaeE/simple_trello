import React, { useState } from 'react';
import Login from './components/Login';
import Board from './components/board/Board';
import Header from './components/Header';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState('');

  const userLogOut = () => {
    alert(`${userId}님 안녕히 가세요`);
    setIsLogin(false);
    setUserId('');
  };
  return (
    <>
      <Header isLogin={isLogin} userId={userId} userLogOut={userLogOut} />
      {isLogin === false ? (
        <Login setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} />
      ) : (
        <Board setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default App;
