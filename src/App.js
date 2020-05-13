import React, { useState } from 'react';
import Login from './Login';
import Board from './Board';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userId, setUserId] = useState('');
  return (
    <>
      {isLogin === false ? (
        <Login setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} />
      ) : (
        <Board setIsLogin={setIsLogin} userId={userId} />
      )}
    </>
  );
};

export default App;
