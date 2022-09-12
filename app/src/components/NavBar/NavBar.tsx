import React from 'react'
import './NavBar.scss'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../../redux/actions/authActionCreators';
import iconSvg from '../../assets/user.svg';
import { useDispatch } from 'react-redux';

const NavBar:React.FC = () => {
  const {user,isAuth} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch<any>()

    const logOut = () =>{
        dispatch(AuthActionCreators.logout())
    }
  return (
    <div className="navbar">
       <div className="navbar__login">
          {!isAuth ? 
          <p>Login</p> 
          : 
          <div className="navbar__username">
          <div className="navbar__user"><img src={iconSvg} />{user.username}</div>
          <p onClick={logOut}>LogOut</p>
          </div>}
       </div>
    </div>
  )
}

export default NavBar