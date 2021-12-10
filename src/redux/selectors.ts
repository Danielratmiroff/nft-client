import { createSelector } from "reselect";
import { RootState } from "./store";

const _settings = (state: RootState) => state.system;

// refactor
export const getUser = createSelector(_settings, (state) => state?.getUser);
