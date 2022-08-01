import EventsService from '../../../services/events';
import { getEventAction, getEventsAction, setEventsStatus } from '../actions';

const getEventsThunk = (page, limit, search, filters) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setEventsStatus('running'));

      const skip = (page - 1) * limit;
      const response = await EventsService.getEvents(
        skip,
        limit,
        search,
        filters
      );
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(setEventsStatus('success'));
        console.log(response.data);
        dispatch(
          getEventsAction({
            events: response.data.events,
            total: response.data.total,
          })
        );
      }
    } catch (error) {
      dispatch(setEventsStatus('error'));
    }
  };
};

export default getEventsThunk;
