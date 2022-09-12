import React from 'react'
import './EventForm.scss'
import { IUser, IEvent } from '../../redux/reducers/types';
import { DatePicker } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {Moment} from "moment";

interface EventFormProps{
    guests: IUser[],
    changeVisible: () =>void,
    submit: (event: IEvent) => void
}

const EventForm:React.FC<EventFormProps> = ({guests, changeVisible, submit}) => {
    const [event, setEvent] = React.useState({
        author: '',
        guest: '',
        description: '',
        date: ''
    })
    const {user} = useTypedSelector(state => state.auth)
    const onChangeEvent:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setEvent({...event,description: e.target.value})
    }
    const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) =>{
        setEvent({...event, guest: e.target.value})
    }
    const formatDate = (date: Date) =>{
       const year = date.getFullYear();
       const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() +1;
       const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
       return `${year}: ${month}: ${day}`
    }
    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }
    const submitEvent = () =>{
       submit({...event,author: user.username})
    }
  return (
    <div className="event-form">
        <div className="event-form__form form-body">
            <div className="form-body__title">
                <h4>Форма события</h4>
                <p onClick={changeVisible}>&times;</p>
            </div>
            <form onSubmit={submitEvent} className="form-body__modal">
             <input type="text" value={event.description} onChange={onChangeEvent} placeholder="Описание события" />
             <select onChange={onSelectChange}>
                {guests.map((guest) => <option value={guest.username}>{guest.username}</option>)}
             </select>
             <DatePicker  onChange={(date) => selectDate(date)} />
             <button>Добавить</button>
             </form>
        </div>
    </div>
  )
}

export default EventForm