import * as State from "./State";
import * as RegistrationState from "../pages/registration/types/State";
import { createInitialStatePayload } from "../pages/registration/utils";
import * as Actions from "./Actions";

export const rootReducer = (s: State.State | undefined, a: Actions.Actions): State.State => {
  if (!s) {
    return State.loading();
  }
  switch (a.type) {
    case Actions.ActionTypes.Load:
      return State.isLoading(s) ? RegistrationState.ready(createInitialStatePayload()) : s;
  }
};
