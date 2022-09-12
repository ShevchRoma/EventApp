import React from 'react'
import { IEvent } from '../../redux/reducers/types';
import {Moment} from "moment";
import {Calendar} from "antd";

interface EventCalendarProps{
  events: IEvent[]
}

const EventCalendar:React.FC<EventCalendarProps> = (props) => {
    const formatDate = (date: Date): string => {
       const year = date.getFullYear();
       const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
       const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return `${year}.${month}.${day}`
}
    function dateCellRender(value: Moment) {
      const formatedDate = formatDate(value.toDate());
      const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
      return (
          <div>
              {currentDayEvents.map((ev, index) =>
                  <div key={index}>{ev.description}</div>
              )}
          </div>
      );
  }

  return (
      <Calendar
          dateCellRender={dateCellRender}
      />
  );
};
export default EventCalendar