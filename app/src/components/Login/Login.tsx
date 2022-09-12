import React from 'react'
import { useDispatch } from 'react-redux'
import './Login.scss'
import { AuthActionCreators } from '../../redux/actions/authActionCreators';

const Login = () => {
   const [username, setUsername] = React.useState<string>('')
   const [password, setPassword] = React.useState<string>('')

   const dispatch = useDispatch<any>()

   const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
     setUsername(e.target.value)
   }
   const onPasswordChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
    setPassword(e.target.value)
  }
  const onSendForm = () =>{
       dispatch(AuthActionCreators.login(username, password))
  }
  return (
    <div className="login">
      <div className="login__body">
        <h1>Login</h1>
        <form className="login__form" onSubmit={onSendForm}>
            <input type="text" value={username} onChange={onChangeHandler} placeholder="Enter username" />
            <input type="password" value={password} onChange={onPasswordChange} placeholder="Enter your password" />
            <button>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login