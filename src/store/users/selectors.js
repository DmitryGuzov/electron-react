import { RootStore } from '../store';

export const getUsersStoreSelector = (store) => store.usersStore;

export const getUsersSelector = (store) => store.usersStore.users;
