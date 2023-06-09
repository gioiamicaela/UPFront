import React, { useState } from 'react';
import './register.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../redux/tokenSlice';
import { useDispatch } from 'react-redux';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [shown, setShown] = useState(false);

  const switchShown = (e) => {
    e.preventDefault();
    setShown(!shown);
  };
  const handleRegister = async (e, email, password, firstName, lastName) => {
    console.log(password);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        {
          email,
          password,
          firstName,
          lastName,
        }
      );
      const response2 = await axios.post(
        `${process.env.REACT_APP_API_URL}/tokens`,
        {
          email,
          password,
        }
      );
      dispatch(
        loginUser({
          email,
          token: response2.data.token,
          userId: response2.data.userId,
        })
      );

      setErrorMessage('');
      setPassword('');
      setEmail('');
      setFirstName('');
      setLastName('');
      navigate('/');
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  };

  return (
    <div className='container vh-80 pt-0 pb-5'>
      <div className='registerBackground h-50'>
        <img src='./background3.jpg' alt='' />
      </div>

      <div className='row rowContainer'>
        <div className='col-12'>
          <h1 className='titleRegister'>¡REGÍSTRATE!</h1>
          <h3 className='subtitleRegister'>Crea tu cuenta</h3>
          <form className='d-flex flex-column justify-content-center align-items-center px-2'>
            <div className='form-group'>
              <input
                type='firstName'
                className='form-control registerInput mb-1'
                id='firstName'
                aria-describedby='firstNameHelp'
                placeholder='Escribe tu nombre'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className='form-group'>
              <input
                type='lastName'
                className='form-control registerInput mb-1'
                id='lastName'
                aria-describedby='lastNameHelp'
                placeholder='Escribe tu apellido'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control registerInput mb-1'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Escribe tu email o número de teléfono'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='form-group passwordGroup registerInput-container'>
              <input
                type={shown ? 'text' : 'password'}
                className='form-control loginInput'
                id='exampleInputPassword1'
                placeholder='Escribe tu contraseña'
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

            <Link
              as={Link}
              to={'/register'}
              style={{ color: 'rgba(255,255,255,.5)' }}
            >
              <button
                type='submit'
                className='btn btnRegister mt-3'
                onClick={(e) => {
                  handleRegister(e, email, password, firstName, lastName);
                }}
              >
                Registrate
              </button>
            </Link>
          </form>
          {errorMessage && (
            <p className='errorMessageRegister'>{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
