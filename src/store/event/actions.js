import {
  CHANGE_EVENTS_SEARCH_PARAMS,
  GET_EVENT,
  GET_EVENTS,
  SET_EVENTS_STATUS,
} from './types';

export const getEventsAction = (data) => ({
  type: GET_EVENTS,
  payload: data,
});

export const getEventAction = (data) => ({
  type: GET_EVENT,
  payload: data,
});

export const setEventsStatus = (data) => ({
  type: SET_EVENTS_STATUS,
  payload: data,
});

export const changeEventsSearchParamsAction = (payload) => ({
  type: CHANGE_EVENTS_SEARCH_PARAMS,
  payload: payload,
});
