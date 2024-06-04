import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  ID?: number;
  name?: string;
  email?: string;
  role?: number;
  address?: string;
  token?: string;
}

interface UserAction {
  setUser: (data: UserState) => void;
  reset: () => void;
}

const initialState: UserState = {
  ID: undefined,
  name: undefined,
  email: undefined,
  role: undefined,
  address: undefined,
  token: undefined,
};

export const useUserStore = create<UserState & UserAction>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (data) => set((state) => data),
      reset: () => set(initialState),
    }),
    {
      name: "bearStore",
    },
  ),
);
