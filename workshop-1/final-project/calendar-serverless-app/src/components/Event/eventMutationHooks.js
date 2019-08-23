import { useMutation } from 'react-apollo-hooks';
import {
  EVENTS_QUERY,
  CREATE_EVENT_MUTATION,
  UPDATE_EVENT_MUTATION,
  DELETE_EVENT_MUTATION
} from '../../queries';

export const useCreateUpdateMutation = (payload, event, eventExists, done) => {
  const mutationType = eventExists
    ? UPDATE_EVENT_MUTATION
    : CREATE_EVENT_MUTATION;
  const createData = payload;
  const updateData = { ...createData, id: event.id };
  const data = eventExists ? updateData : createData;

  const transformCacheUpdateData = (eventsList, newData) => {
    const mutationResult = eventExists
      ? newData.eventUpdate
      : newData.eventCreate;

    const createTransformation = {
      ...eventsList,
      count: eventsList.count + 1,
      items: [...eventsList.items, mutationResult]
    };

    const updateTransformation = {
      ...eventsList,
      items: eventsList.items.map(item =>
        item.id === mutationResult.id ? mutationResult : item
      )
    };
    return eventExists ? updateTransformation : createTransformation;
  };

  return useMutation(mutationType, {
    variables: {
      data
    },
    update: (cache, { data }) => {
      const { eventsList } = cache.readQuery({
        query: EVENTS_QUERY
      });

      cache.writeQuery({
        query: EVENTS_QUERY,
        data: {
          eventsList: transformCacheUpdateData(eventsList, data)
        }
      });

      done();
    }
  });
};

export const useDeleteMutation = (event, done) => {
  return useMutation(DELETE_EVENT_MUTATION, {
    variables: { data: { id: event.id } },
    update: cache => {
      const { eventsList } = cache.readQuery({
        query: EVENTS_QUERY
      });

      cache.writeQuery({
        query: EVENTS_QUERY,
        data: {
          eventsList: {
            ...eventsList,
            count: eventsList.count - 1,
            items: eventsList.items.filter(item => item.id !== event.id)
          }
        }
      });

      done();
    }
  });
};