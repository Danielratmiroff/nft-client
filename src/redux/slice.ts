// src/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from ".";
import { getVisit, getVisitResponse } from "./caseReducers";

const initialState: SettingsState = {
  getUser: "",
};

export const name = "sytemSettings";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    getVisit,
    getVisitResponse,
  },
});

export const { actions, reducer } = slice;
