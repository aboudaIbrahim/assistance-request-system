import { authApi } from "@/features/auth/api/auth.api";
import { User } from "@/features/auth/api/auth.type";
import { encryptData } from "@/utils/storage.helpers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { user: User | null; token: string | null } = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    rehydrateAuth: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        const { token, user } = action.payload;
        const encryptedAuth = encryptData({ token, user });
        localStorage.setItem("authData", encryptedAuth);
        state.token = token;
        state.user = { id: user.id, email: user.email, role: user.role };
      }
    );
  },
});

export const { rehydrateAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
