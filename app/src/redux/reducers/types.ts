//===============//authReducer//================//

export interface IUser{
    username: string;
    password: string
}

export interface AuthState{
    user: IUser,
    isAuth: boolean,
    error: string,
    isLoading: false
}

export enum AuthActionsEnum{
    SET_USER = 'SET_USER',
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetUserAction{
    type: AuthActionsEnum.SET_USER
    payload: IUser
}
export interface SetAuthAction{
    type: AuthActionsEnum.SET_IS_AUTH
    payload: boolean
}
export interface SetErrorAction{
    type: AuthActionsEnum.SET_ERROR
    payload: string
}
export interface SetLoadingAction{
    type: AuthActionsEnum.SET_IS_LOADING
    payload: boolean
}

export type AuthAction = SetUserAction | SetAuthAction | SetErrorAction | SetLoadingAction

//=============//eventReducer//==============//

export interface IEvent{
    author: string
    guest: string
    description: string
    date: string
}

export interface EventState{
    events: IEvent[]
    guests: IUser[]
}

export enum EventActionsEnum{
    GET_GUESTS = 'GET_GUESTS',
    GET_EVENTS = 'GET_EVENTS'
}

export interface GetEventsAction{
    type: EventActionsEnum.GET_EVENTS
    payload: IEvent[]
}

export interface GetGuestsAction{
    type: EventActionsEnum.GET_GUESTS
    payload: IUser[]
}

export type EventAction = GetEventsAction | GetGuestsAction
