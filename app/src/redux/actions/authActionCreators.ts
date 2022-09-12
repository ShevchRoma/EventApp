import axios from "axios";
import { AuthActionsEnum,IUser, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction } from "../reducers/types";
import { AppDispatch } from "../store";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction =>({type: AuthActionsEnum.SET_USER, payload: user }),
    setIsAuth: (payload: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_IS_AUTH, payload}),
    setLoading: (payload: boolean):SetLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
    setError: (err: string):SetErrorAction =>({type: AuthActionsEnum.SET_ERROR, payload: err}),
    login: (username: string, password: string) => async(dispatch: AppDispatch) =>{
        try{
        dispatch(AuthActionCreators.setLoading(true))
        const response = await axios.get<IUser[]>('./users.json')
        const mockUsers = response.data.find(user => user.username === username && user.password === password)
        if(mockUsers){
            localStorage.setItem('user',mockUsers.username)
            localStorage.setItem('auth', 'true')
            dispatch(AuthActionCreators.setUser(mockUsers))
        }else{
            dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
        }
    }catch(e){
        dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
    }
    },
    logout: () => async(dispatch:AppDispatch) =>{
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}