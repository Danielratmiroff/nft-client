import rootSaga from "./saga";
import { systemSlice } from "./slice";

export { rootSaga as umsSaga };

export * from "./selectors";
export * from "./models";

export const { name, reducer: systemReducer, actions } = systemSlice;

export const { getVisit, getVisitResponse } = actions;
