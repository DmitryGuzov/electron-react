import axiosInstance from '../api';
import { makeAPIWithQueries } from '../config/api';

class EventsService {
  getEvents = async (skip, limit, search, filters) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      makeAPIWithQueries(
        `http://localhost:8080/api/users/${userId}/events`,
        `skip=${skip}&take=${limit}&search=${search}&filters=${filters}`
      ),
      {}
    );
  };
  getEvent = async (eventId) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      `http://localhost:8080/api/users/${userId}/events/${eventId}`,
      {}
    );
  };
}

export default new EventsService();
