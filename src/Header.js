import React from 'react';
import './Header.css';

const Header = ({ isLogin, userId, userLogOut }) => {
  return (
    <>
      {isLogin === false ? (
        <header>SignUp</header>
      ) : (
        <header>
          <span>{userId}님 좋은 하루 되세요</span>
          <span className="logout" onClick={userLogOut}>
            LogOut
          </span>
        </header>
      )}
      <div className="title-container">
        <span className="title">SIMPLE TRELLO!</span>
      </div>
    </>
  );
};

export default Header;
