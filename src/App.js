import React, { useState } from 'react';
import Login from './Login';
import Board from './Board';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userId, setUserId] = useState('');

  const userLogOut = () => {
    alert(`${userId}님 안녕히 가세요`);
    setIsLogin(false);
    setUserId('');
  };
  return (
    <>
      {isLogin === false ? (
        <Login setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} />
      ) : (
        <Board
          setIsLogin={setIsLogin}
          userId={userId}
          userLogOut={userLogOut}
        />
      )}
    </>
  );
};

export default App;
