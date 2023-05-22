import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "./reducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, GenericEpicMiddleware } from "./observable";

export const createStore = () => {
  const epicMiddleware: GenericEpicMiddleware = createEpicMiddleware();
  const store = configureStore({ reducer: createReducer, middleware: [epicMiddleware] });
  epicMiddleware.run(rootEpic);

  return store;
};
