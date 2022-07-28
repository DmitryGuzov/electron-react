import axiosInstance from '../api';
import { makeAPIWithQueries } from '../config/api';

class CarsService {
  getCars = async (skip, limit, search, filters) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      makeAPIWithQueries(
        `http://localhost:8080/api/users/${userId}/cars`,
        `skip=${skip}&take=${limit}&search=${search}&filters=${filters}`
      ),
      {}
    );
  };
  getCar = async (carId) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      `http://localhost:8080/api/users/${userId}/cars/${carId}`,
      {}
    );
  };
  addCar = async (values) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.post(
      `http://localhost:8080/api/users/${userId}/cars`,
      values
    );
  };
  updateCar = async (carId, update) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.patch(
      `http://localhost:8080/api/users/${userId}/cars/${carId}`,
      update
    );
  };
  deleteCar = async (carId) => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.delete(
      `http://localhost:8080/api/users/${userId}/cars/${carId}`
    );
  };
}

export default new CarsService();
