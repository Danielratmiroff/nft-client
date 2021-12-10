import { createSelector } from "reselect";
import { RootState } from "./store";

// refactor bug
const _settings = (state: RootState) => state.settings;

export const getUser = createSelector(_settings, (state) => state.getUser);
