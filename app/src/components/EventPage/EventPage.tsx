import React from 'react'
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from '../EventCalendar/EventCalendar';
import EventForm from '../EventForm/EventForm';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { EventActionCreators } from '../../redux/actions/eventActionCreators';
import { IEvent } from '../../redux/reducers/types';


const EventPage = () => {
    const [visible, setVisible] = React.useState(false)
    const dispatch = useDispatch<any>()
    const {guests,events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)
    React.useState(() =>{
        dispatch(EventActionCreators.fetchEvents(user.username))
        dispatch(EventActionCreators.fetchGuests())
    })
    const changeVisible = () =>{
        setVisible(true)
    }
    const createEvent = (event:IEvent) =>{
       dispatch(EventActionCreators.createEvent(event))
    }
  return (
    <Layout>
    <EventCalendar events={events}/>
    <Row justify="center">
        <div>
            {visible ? <EventForm changeVisible={() => setVisible(false)} guests={guests} submit={createEvent} /> : <button onClick={changeVisible}>
                                             Добавить событие</button>}
        </div>
    </Row>
</Layout>
);
}

export default EventPage