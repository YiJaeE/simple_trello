import React from 'react';
import './Login.css';

const Login = ({ setIsLogin, userId, setUserId }) => {
  const userInput = ['id', 'password'];

  const handlechange = (key, e) => {
    if (key === 'id') {
      setUserId(e.target.value);
      console.log('사용자 아이디 입력 중...');
    } else {
      console.log('사용자 패스워드 입력 중...');
    }
  };

  const handleButtonClick = () => {
    alert(`${userId}님 로그인 되었습니다`);
    setIsLogin(true);
  };

  const handleKeyPress = (e) => {
    if (e.target.matches('.password') && e.key === 'Enter') {
      handleButtonClick();
    }
  };
  return (
    <>
      <header>로그인 요망</header>
      <div className="container">
        <form className="form-container">
          <fieldset>
            <legend>회원가입 폼</legend>
            {userInput.map((input, idx) => (
              <label htmlFor={input} key={`input${idx}`}>
                <span className="a11y-hidden">{input}</span>
                <input
                  type={input === 'password' ? 'password' : 'text'}
                  className={input}
                  placeholder={input}
                  onChange={(e) => handlechange(input, e)}
                  onKeyPress={handleKeyPress}
                />
              </label>
            ))}
            <button type="button" className="btn" onClick={handleButtonClick}>
              LogIn
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Login;
