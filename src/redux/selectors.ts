import { createSelector } from "reselect";
import { RootState } from "./store";

const settings = (state: RootState) => state.settings;

export const getNumOfViruses = createSelector(
  settings,
  (state) => state.numOfViruses
);
