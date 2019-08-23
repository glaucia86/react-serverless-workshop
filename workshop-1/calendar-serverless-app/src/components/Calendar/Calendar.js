/**
 * What is happening here?
 *
 * 1. Calendar renders with a list of events
 * 2. Give Calendar a custom Popover (EventPopover) component 
 *    that will be used to edit events
 * 3. Render a Modal (EventModal) that will be used to create new events
 *
 */

 /** TODO:
  * 
  * 1. Fetch data with GraphQL query
  * 2. Handle error and loading state
  * 3. Replace eventsList with query result
  * 
  */

import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import EventPopover from '../Event/EventPopover';
import EventModal from '../Event/EventModal';

// import useQuery and Events Query

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const transformItems = eventsList =>
  eventsList.items.map(item => {
    return {
      ...item,
      email: item.email || '',
      description: item.description || '',
      start: new Date(item.startAt),
      end: new Date(item.endAt)
    };
  });

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // TODO -- 1

  // TODO -- 2

  return (
    <div className="calendar">
      <div style={{ height: '100vh' }}>
        <BigCalendar
          localizer={BigCalendar.momentLocalizer(moment)}
          events={transformItems(eventsList)} // TODO -- 3
          components={{ event: EventPopover }}
          showMultiDayTimes
          selectable
          onSelectSlot={({ start, end }) => {
            setSelectedStartDate(start);
            setSelectedEndDate(end);
            setIsModalOpen(true);
          }}
        />

        <EventModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          event={{
            startAt: selectedStartDate,
            endAt: selectedEndDate,
            title: '',
            email: '',
            description: ''
          }}
        />
      </div>
    </div>
  );
};

const eventsList = {
  items: [
    {
      id: 1,
      startAt: new Date(),
      endAt: new Date(),
      title: 'Meeting today',
      email: '',
      description: ''
    }
  ]
};

export default Calendar;
