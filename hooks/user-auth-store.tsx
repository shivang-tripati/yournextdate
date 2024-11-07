// src/store/authStore.js
import { create } from "zustand";

type User = {
  id: string;
  email: string;
  name: string;
  city: string;
  nearBy: string;
  profilePictureUrl: string;
  idealPerson: string;
};
interface UserAuthStoreProps {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<UserAuthStoreProps>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user: User) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
