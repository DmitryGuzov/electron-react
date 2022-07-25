import axiosInstance from '../api';

class ServicesService {
  getServices = async () => {
    const userId = '0e6867ee-1bc8-460e-951c-b9639337b489';
    return await axiosInstance.get(
      `http://localhost:8080/api/users/${userId}/services`,
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
