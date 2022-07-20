import axiosInstance from '../api';
import { makeAPIWithQueries } from '../config/api';

class UsersService {
  getCustomers = async (skip, limit, sort, search) => {
    return await axiosInstance.get(
      makeAPIWithQueries(
        'http://localhost:8080/api/admin/users',
        `skip=${skip}&limit=${limit}&sort=${sort}&search=${search}`
      ),
      {}
    );
  };
  //   getCustomer = async (id) => {
  //     return await axiosInstance.get(CustomerAPI(id), {});
  //   };
}

export default new UsersService();
