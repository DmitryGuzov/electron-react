import axiosInstance from '../api';
import { makeAPIWithQueries } from '../config/api';

class UsersService {
  getCustomers = async (skip, limit, search, filters) => {
    return await axiosInstance.get(
      makeAPIWithQueries(
        'http://localhost:8080/api/admin/users',
        `skip=${skip}&take=${limit}&search=${search}&filters=${filters}`
      ),
      {}
    );
  };
  //   getCustomer = async (id) => {
  //     return await axiosInstance.get(CustomerAPI(id), {});
  //   };
}

export default new UsersService();
