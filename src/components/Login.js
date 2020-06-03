import React from 'react';
import '../styles/Login.css';

const Login = ({ setIsLogin, userId, setUserId }) => {
  const userInput = ['id', 'password'];

  const handlechange = (key, e) => {
    if (key === 'id') {
      setUserId(e.target.value);
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

  const handleBlur = (key, e) => {
    const regExpPW = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (key === 'password' && !regExpPW.test(e.target.value)) {
      console.log(`형식에 맞는 비밀번호를 기입해주세요`);
    }
  };
  return (
    <>
      <div className="login-container">
        <form className="form-container">
          <fieldset>
            <legend>회원가입 폼</legend>
            {userInput.map((input, idx) => (
              <label htmlFor={input} key={`input${idx}`}>
                <span className="a11y-hidden">{input}</span>
                <input
                  type={input === 'password' ? 'password' : 'text'}
                  className={input}
                  placeholder={`${input}를 입력하세요`}
                  onChange={(e) => handlechange(input, e)}
                  onKeyPress={handleKeyPress}
                  onBlur={(e) => handleBlur(input, e)}
                />
              </label>
            ))}
            <button type="button" className="btn" onClick={handleButtonClick}>
              로그인
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Login;
