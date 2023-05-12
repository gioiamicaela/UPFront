import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './render/LoginPage';
import Home from './render/Home';
import { useSelector } from 'react-redux';
import Password from './render/Password';
import Register from './components/Register';
import NavBar from './components/NavBar';

const ProtectedRoute = ({ token, children }) => {
  if (token.token) {
    return children;
  }
  return <Navigate to='/login' />;
};

function App() {
  const token = useSelector((state) => {
    return state.token;
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/'
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/password'
          element={
            <ProtectedRoute token={token}>
              <Password />
            </ProtectedRoute>
          }
        />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
