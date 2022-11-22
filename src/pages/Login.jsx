import React from 'react';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        email
        <input type="text" id="email" />
      </label>
      <label htmlFor="password">
        password
        <input type="password" id="password" />
      </label>
    </form>
  );
}

export default Login;
