// src/slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { SettingsState } from ".";
import { getVisit, getVisitResponse } from "./caseReducers";

const initialState: any = {
  getUser: "",
};

export const name = "sytemSettings";

export const systemSlice = createSlice({
  name,
  initialState,
  reducers: {
    getVisit,
    getVisitResponse,
  },
});
