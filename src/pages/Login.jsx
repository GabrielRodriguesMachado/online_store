import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const disableBtn = () => {
    const minPasswordLength = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = emailRegex.test(email);
    const passwordIsValid = password.length > minPasswordLength;
    if (emailIsValid && passwordIsValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    disableBtn();
  }, [email, password]);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor="email">
        email
        <input type="text" id="email" value={email} onChange={handleEmail} />
      </label>
      <label htmlFor="password">
        password
        <input type="password" id="password" value={password} onChange={handlePassword} />
      </label>
      <button type="button" disabled={disabled} onClick={handleSubmit}>Login</button>
    </form>
  );
}

export default Login;