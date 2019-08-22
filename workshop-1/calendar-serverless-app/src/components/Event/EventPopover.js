/**
 * What is happening here?
 *
 * 1. Renders a React Popover component
 * 2. Open and close state is controlled 
 *   from the component since it wraps the Calendar's event title
 * 3. The Popover renders a form which can be used
 *    to UPDATE or DELETE a new event
 *
 */

 /** TODO:
  * 
  * Leave it how you found it 🙄
  * You're on your own from here if you edit 🤪
  * 
  */

import React from 'react';
import Popover from 'react-popover';

import EventForm from '../Event/EventForm';

const EventPopover = ({ event }) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      onOuterAction={() => setIsPopoverOpen(false)}
      body={[<EventForm key={event.id} event={event} closeModal={() => setIsPopoverOpen(false)} />]}
      tipSize={15}
      appendTarget={document.body}
    >
      <div onClick={() => setIsPopoverOpen(true)}>{event.title}</div>
    </Popover>
  );
};
export default EventPopover;
