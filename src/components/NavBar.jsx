import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/tokenSlice';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/login');
  };

  const token = useSelector((state) => {
    return state.token;
  });

  return (
    <Navbar expand='lg'>
      <Container>
        <Link to='/' className='d-flex align-items-end'>
          <Navbar.Brand
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              fontFamily: 'Barlow, sans-serif',
            }}
            className='text-center'
          >
            <i className='fa-solid fa-mug-hot' style={{ color: 'white' }}></i>
            <span className='mx-2'>Arq Web</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              as={Link}
              to={'/'}
              style={{ color: 'rgba(255,255,255,.5)' }}
            >
              Home
            </Nav.Link>

            {token.token && (
              <>
                <Nav.Link
                  as={Link}
                  onClick={handleLogout}
                  style={{ color: 'rgba(255,255,255,.5)' }}
                >
                  Logout
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/password'}
                  style={{ color: 'rgba(255,255,255,.5)' }}
                >
                  Change Password
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
