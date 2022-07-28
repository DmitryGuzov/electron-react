import axiosInstance from '../api';
import { makeAPIWithQueries } from '../config/api';

class ServicesService {
  getServices = async (skip, limit, search, filters) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      makeAPIWithQueries(
        `http://localhost:8080/api/users/${userId}/services`,
        `skip=${skip}&take=${limit}&search=${search}&filters=${filters}`
      ),
      {}
    );
  };
  getCarServices = async (carId) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      `http://localhost:8080/api/users/${userId}/cars/${carId}/services`,
      {}
    );
  };
  getService = async (carId, serviceId) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      `http://localhost:8080/api/users/${userId}/cars/${carId}/services/${serviceId}`,
      {}
    );
  };
}

export default new ServicesService();
