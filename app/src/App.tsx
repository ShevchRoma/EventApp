import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrivateRoute } from './routes/PrivateRoute';
import { AuthActionCreators } from './redux/actions/authActionCreators';
import { useDispatch } from 'react-redux';
import { IUser } from './redux/reducers/types';
import NavBar from './components/NavBar/NavBar';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() =>{
  if(localStorage.getItem('auth')){
    dispatch(AuthActionCreators.setIsAuth(true))
    dispatch(AuthActionCreators.setUser({username: localStorage.getItem('user')} as IUser))
  }
})
  return (
    <div>
      <div>
        <NavBar />
      </div>
       <PrivateRoute />
      </div>
  );
}

export default App;
