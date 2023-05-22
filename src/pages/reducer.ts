import * as State from "./types/State";
import * as Actions from "./types/Actions";
import * as RegistrationState from "./registration/types/State";
import * as RegistrationAction from "./registration/types/Actions";
import { reducer as registrationReducer } from "./registration/reducer";
import * as LoginState from "./login/types/State";
import { reducer as loginReducer } from "./login/reducer";

export const pageReducer = (s: State.State, a: Actions.Action): State.State => {
  if (LoginState.isState(s)) {
    return loginReducer(s, a);
  }

  if (RegistrationState.isState(s) && RegistrationAction.isActions(a)) {
    return registrationReducer(s, a);
  }

  return s;
};
