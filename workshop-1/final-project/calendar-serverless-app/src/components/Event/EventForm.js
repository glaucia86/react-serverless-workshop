import React from 'react';
import DatePicker from 'react-datepicker';

import {useCreateUpdateMutation, useDeleteMutation} from './eventMutationHooks'
import 'react-datepicker/dist/react-datepicker.css';

import './Event.css';

const EventForm = ({ event, closeModal }) => {
  const [startAt, setStartDate] = React.useState(new Date(event.startAt));
  const [endAt, setEndDate] = React.useState(new Date(event.endAt));
  const [title, setTitle] = React.useState(event.title);
  const [email, setEmail] = React.useState(event.email);
  const [description, setDescription] = React.useState(event.description);

  const payload = { startAt, endAt, title, email, description };

  const eventExists = !!event.title;

  const createUpdateEvent = useCreateUpdateMutation(
    payload,
    event,
    eventExists,
    () => closeModal()
  );
  const deleteEvent = useDeleteMutation(event, () => closeModal());

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createUpdateEvent();
      }}
    >
      <fieldset>
        <div className="container">
          <div className="row">
            <div className="column">
              <label>Start Date</label>
              <DatePicker
                selected={startAt}
                onChange={date => setStartDate(date)}
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                showTimeInput
              />
            </div>
            <div className="column">
              <label>End Date</label>
              <DatePicker
                selected={endAt}
                onChange={date => setEndDate(date)}
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                showTimeInput
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Where should I remind you?"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="What are you up to?"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Where? How? Zoom? Skype"
                id="description"
                columns="50"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="column column-50">
              <input
                className="button-primary"
                type="submit"
                value={eventExists ? 'Update' : 'Create'}
              />
            </div>
            {eventExists && (
              <div className="column column-50">
                <input
                  className="button-danger"
                  type="button"
                  onClick={deleteEvent}
                  value="Delete"
                />
              </div>
            )}
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default EventForm;
