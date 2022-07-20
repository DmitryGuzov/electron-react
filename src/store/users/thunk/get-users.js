import UsersService from '../../../services/users';
import { getUsersAction, setUsersStatus } from '../actions';

const getUsersThunk = (skip, limit, sort, search) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setUsersStatus('running'));

      const response = await UsersService.getCustomers(
        skip,
        limit,
        sort,
        search
      );
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(setUsersStatus('success'));
        dispatch(
          getUsersAction({
            users: response.data,
            // total: response.data.count,
          })
        );
      }
    } catch (error) {
      dispatch(setUsersStatus('error'));
    }
  };
};

export default getUsersThunk;
