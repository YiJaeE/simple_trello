import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ setIsLogin, userId, setUserId }) => {
  const [rightPW, setRightPW] = useState(false);
  const userInput = ['id', 'password'];

  const regExpPW = value => {
    const regExp = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    return regExp.test(value) ? 1 : 0;
  };

  const handlechange = (key, e) => {
    key === 'id' && setUserId(e.target.value);
    key === 'password' && regExpPW(e.target.value) ? setRightPW(true) : setRightPW(false);
  };

  const handleButtonClick = () => {
    alert(`${userId}님 로그인 되었습니다`);
    setIsLogin(true);
  };

  const handleKeyPress = e => {
    e.target.matches('.password') && e.key === 'Enter' && rightPW && handleButtonClick();
  };

  const handleBlur = (key, e) => {
    key === 'password' &&
      !regExpPW(e.target.value) &&
      console.log(`형식에 맞는 비밀번호를 기입해주세요`);
  };
  return (
    <>
      <div className="login-container">
        <form className="form-container">
          <fieldset>
            <legend>로그인 폼</legend>
            {userInput.map((input, idx) => (
              <label htmlFor={input} key={`input${idx}`}>
                <span className="a11y-hidden">{input}</span>
                <input
                  type={input === 'password' ? 'password' : 'text'}
                  className={input}
                  placeholder={`${input}를 입력하세요`}
                  onChange={e => handlechange(input, e)}
                  onKeyPress={handleKeyPress}
                  onBlur={e => handleBlur(input, e)}
                />
              </label>
            ))}
            <button
              type="button"
              className={rightPW ? 'btn-active' : 'btn'}
              onClick={rightPW ? handleButtonClick : null}
            >
              로그인
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Login;
