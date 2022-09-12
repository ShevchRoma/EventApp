import Login from "../components/Login/Login";
import EventPage from "../components/EventPage/EventPage";
import { useTypedSelector } from '../components/hooks/useTypedSelector';
 
 export const PrivateRoute = () =>{
       const {isAuth} = useTypedSelector(state => state.auth);
       console.log(isAuth)
    return isAuth ? <EventPage /> : <Login />
}