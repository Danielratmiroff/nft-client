// src/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setNumOfViruses } from "./caseReducers";
import { SettingsState } from ".";

const initialState: SettingsState = {
  numOfViruses: 0,
};

export const name = "settings";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setNumOfViruses,
  },
});

export const { actions, reducer } = slice;
