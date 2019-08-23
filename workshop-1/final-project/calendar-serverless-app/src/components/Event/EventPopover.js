import React from 'react';
import Popover from 'react-popover';

import EventForm from '../Event/EventForm';

const EventItem = ({ event }) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      onOuterAction={() => setIsPopoverOpen(false)}
      body={[<EventForm key={event.id} event={event} closeModal={() => setIsPopoverOpen(false)} />]}
      tipSize={15}
      appendTarget={document.body}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>{event.title}</div>
    </Popover>
  );
};
export default EventItem;
