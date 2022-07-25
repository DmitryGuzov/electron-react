import axiosInstance from '../api';

class CarsService {
  getCars = async () => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      `http://localhost:8080/api/users/${userId}/cars`,
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
}

export default new CarsService();
