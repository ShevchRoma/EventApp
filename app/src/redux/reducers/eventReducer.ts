import { EventAction, EventActionsEnum, EventState } from "./types"

const initialState:EventState = {
    events: [],
    guests: []
}

export const eventReducer = (state = initialState, action:EventAction):EventState =>{
              switch(action.type){
                 case EventActionsEnum.GET_GUESTS:
                    return{
                        ...state,
                        guests: action.payload
                    }
                case EventActionsEnum.GET_EVENTS:
                    return{
                        ...state,
                        events: action.payload
                    }
                    default:
                         return state
                 
              }
}