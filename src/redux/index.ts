import { slice } from "./slice";

export * from "./selectors";
export * from "./models";

export const { name, reducer: systemReducer, actions } = slice;

export const { setNumOfViruses } = actions;
