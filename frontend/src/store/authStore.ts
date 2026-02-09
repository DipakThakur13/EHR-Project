import { User } from '../types';

let currentUser: User | null = null;

export const authStore = {
  getUser: () => currentUser,

  login: (user: User) => {
    currentUser = user;
  },

  logout: () => {
    currentUser = null;
  },
};
