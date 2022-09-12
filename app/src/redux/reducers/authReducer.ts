import { AuthAction, AuthActionsEnum,IUser } from "./types"

const initialState = {
    user: {} as IUser,
    isAuth: false,
    error: '',
    isLoading: false
}

export const authReducer = (state = initialState, action: AuthAction) =>{
             switch(action.type){
                case AuthActionsEnum.SET_USER:
                    return{
                        ...state,
                        user: action.payload
                    }
                case AuthActionsEnum.SET_IS_AUTH:
                    return{
                        ...state,
                        isAuth: action.payload
                    }
                case AuthActionsEnum.SET_IS_LOADING:
                    return{
                        ...state,
                        isLoading: action.payload
                    }
                case AuthActionsEnum.SET_ERROR:
                    return{
                        ...state,
                        error: action.payload
                    }
                default:
                    return state
             }
}