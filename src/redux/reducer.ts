import * as State from "./State";
import * as RegistrationState from "../pages/registration/types/State";
import { createInitialStatePayload } from "../pages/registration/utils";
import { pageReducer } from "../pages/reducer";
import * as Actions from "./Actions";
import { createClient } from "../api/client";
import { combineReducers } from "redux";

// export const createReducer = (s: State.State | undefined, a: Actions.Actions): State.State => {
//   console.log(s);
//   return combineReducers<State.State, Actions.Actions>({
//     page: (s: State.State | undefined, a: Actions.Actions) =>
//       s === undefined ? RegistrationState.ready(createInitialStatePayload()) : pageReducer(s.page, a),
//   })(s, a);
// };

export const createReducer = (s: State.State | undefined, a: Actions.Actions): State.State => {
  console.log(s);
  return s === undefined ? RegistrationState.ready(createInitialStatePayload()) : pageReducer(s, a);
};
