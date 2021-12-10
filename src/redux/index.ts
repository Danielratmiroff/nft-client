import rootSaga from "./saga";
import { slice } from "./slice";

export { rootSaga as umsSaga };

export * from "./selectors";
export * from "./models";

export const { name, reducer: systemReducer, actions } = slice;

export const { getVisit, getVisitResponse } = actions;
