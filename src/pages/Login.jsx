/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import React from 'react';
import shopping from '../images/shopping.svg';

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

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden md:block relative w-0 flex-1 bg-gray-900">
        <div className="flex h-full justify-center items-center">
          <img src={shopping} alt="shooping" />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-4 py-12 sm:px6 md:flex-none md:px-20 xl:px-24 justify-center items-center">
        <div className="mx-auto w-full max-w-sm">
          <div>
            <img src={shopping} alt="shopping" className="md:hidden" />
            <h2 className="mt-6 text-3xl font-semibold text-gray-700">Entrar</h2>
          </div>
          <div className="mt-6">
            <form>
              <div htmlFor="email" className="mb-4">
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Email"
                  className="appearance-none block w-full px-4 leading-tight text-gray-700 border border-gray-300 rounded-md py-3 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"
                />
              </div>
              <div htmlFor="password" className="mb-4">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Senha"
                  className="appearance-none block w-full px-4 leading-tight text-gray-700 border border-gray-300 rounded-md py-3 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"
                />
              </div>
              <div className="mb-4">
                <Link to="/products">
                  <button
                    type="button"
                    disabled={disabled}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
