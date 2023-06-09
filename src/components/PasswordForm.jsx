import React, { useState } from 'react';
import './password.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function PasswordForm() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [shown, setShown] = useState(false);
  const email = useSelector((state) => {
    return state.token.email;
  });

  const switchShown = (e) => {
    e.preventDefault();
    setShown(!shown);
  };
  const handlePassword = async (e, password) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/password`,
        {
          email,
          password,
        }
      );
      setPassword('');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container vh-80 pt-0 pb-5'>
      <div className='passwordBackground h-50'>
        <img src='./backgroundPassword.jpg' alt='' />
      </div>

      <div className='row rowContainer pt-5'>
        <div className='col-12'>
          <h1 className='titlePassword'>¡ACTUALIZA TU CONTRASEÑA!</h1>
          <form
            className='d-flex flex-column justify-content-center align-items-center px-2'
            onSubmit={(e) => {
              handlePassword(e, password);
            }}
          >
            <div className='form-group passwordGroup passwordInput-container'>
              <input
                type={shown ? 'text' : 'password'}
                className='form-control passwordInput'
                id='exampleInputPassword1'
                placeholder='Escribe tu nueva contraseña'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className='passwordIcon'
                onClick={(e) => {
                  switchShown(e);
                }}
              >
                {shown ? (
                  <i
                    className='fa-solid fa-eye-slash'
                    style={{ color: '#f2f2f2' }}
                  ></i>
                ) : (
                  <i
                    className='fa-sharp fa-solid fa-eye'
                    style={{ color: '#f2f2f2' }}
                  ></i>
                )}
              </button>
            </div>

            <button type='submit' className='btn btnPassword mt-5'>
              Actualiza
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordForm;
