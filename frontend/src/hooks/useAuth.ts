import { authStore } from '../store/authStore';
import { User } from '../types';

export function useAuth() {
  const login = (user: User) => {
    authStore.login(user);
  };

  const logout = () => {
    authStore.logout();
  };

  const user = authStore.getUser();

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };
}
