import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertInfos, AlertState } from "./alert.type";

const initialState: AlertState = {
  alert: null,
};

const alertSlice = createSlice({
  initialState,
  name: "alert",
  reducers: {
    openAlert: (state, action: PayloadAction<AlertInfos>) => {
      state.alert = action.payload;
    },
    closeAlert: (state) => {
      if (state.alert) {
        state.alert.active = false;
      }
    },
    clearAlert: (state) => {
      state.alert = null;
    },
  },
});

export const { openAlert, closeAlert, clearAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
