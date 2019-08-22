import { gql } from '@8base/apollo-client';

export const EVENTS_QUERY = gql`
  query {
    eventsList {
      count
      items {
        id
        title
        startAt
        endAt
        description
        allDay
        email
      }
    }
  }
`;

export const CREATE_EVENT_MUTATION = gql`
  mutation EventCreate($data: EventCreateInput!) {
    eventCreate(data: $data) {
      id
      title
      startAt
      endAt
      description
      allDay
      email
    }
  }
`;

export const UPDATE_EVENT_MUTATION = gql`
  mutation EventUpdate($data: EventUpdateInput!) {
    eventUpdate(data: $data) {
      id
      title
      startAt
      endAt
      description
      allDay
      email
    }
  }
`;


export const DELETE_EVENT_MUTATION = gql`
  mutation EventDelete($data: EventDeleteInput!) {
    eventDelete(data: $data) {
      success
    }
  }
`;