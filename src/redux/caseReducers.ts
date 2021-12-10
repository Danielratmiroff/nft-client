import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from ".";

export const getVisit: CaseReducer<SettingsState, PayloadAction> = (
  state,
  __
) => {
  // console.log("red");
};

export const getVisitResponse: CaseReducer<
  SettingsState,
  PayloadAction<string>
> = (state, { payload }) => {
  state.getUser = payload;
};
