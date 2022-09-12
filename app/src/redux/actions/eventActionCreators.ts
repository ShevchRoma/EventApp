import axios from "axios";
import { EventActionsEnum, GetEventsAction, GetGuestsAction, IUser, IEvent } from "../reducers/types";
import { AppDispatch } from "../store";


export const EventActionCreators = {
     setGuests: (guests: IUser[]): GetGuestsAction => ({type: EventActionsEnum.GET_GUESTS, payload: guests}),
     setEvents: (payload: IEvent[]): GetEventsAction => ({type: EventActionsEnum.GET_EVENTS, payload}),
     fetchGuests: () => async(dispatch: AppDispatch) =>{
        try{
          const response = await axios.get('./users.json')
          dispatch(EventActionCreators.setGuests(response.data))
        }catch(e){
            console.log(e)
        }
     },
     createEvent: (event: IEvent) => async (dispath: AppDispatch) =>{
         const json = localStorage.getItem('events') || '[]'
         const events = JSON.parse(json) as IEvent[]
         events.push(event)
         const jsonEvents = JSON.stringify(events)
         localStorage.setItem('events', jsonEvents)
     },
     fetchEvents: (username: string) => async(dispatch: AppDispatch) =>{
        const json = localStorage.getItem('events') || '[]'
        const events = JSON.parse(json) as IEvent[]
        const currentEvents = events.filter(event => username === event.author || event.guest === username);
        dispatch(EventActionCreators.setEvents(currentEvents))
   },
}