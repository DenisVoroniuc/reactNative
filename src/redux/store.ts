import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./observable";

export const createStore = () => {
  const epicMiddleware = createEpicMiddleware();
  epicMiddleware.run(rootEpic);

  return configureStore({ reducer: rootReducer, middleware: [epicMiddleware] });
};
