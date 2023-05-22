import * as Actions from "./types/Actions";
import * as State from "./types/State";
import * as LoginState from "../login/types/State";

export const reducer = (s: State.State, a: Actions.Actions): State.State | LoginState.Ready => {
  switch (a.type) {
    case Actions.ActionTypes.SetEmail:
      return State.isReady(s) ? { ...s, email: a.payload } : s;
    case Actions.ActionTypes.SetPassword:
      return State.isReady(s) ? { ...s, password: a.payload } : s;
    case Actions.ActionTypes.SetPasswordConfirmation:
      return State.isReady(s) ? { ...s, passwordConfirmation: a.payload } : s;
    case Actions.ActionTypes.SetLastName:
      return State.isReady(s) ? { ...s, lastName: a.payload } : s;
    case Actions.ActionTypes.SetFirstName:
      return State.isReady(s) ? { ...s, firstName: a.payload } : s;
    case Actions.ActionTypes.Submit:
      return State.isReady(s) ? State.saving(s) : s;
    case Actions.ActionTypes.SaveError:
      return State.isSaving(s) ? State.savingError({ ...s, errorMessage: a.payload }) : s;
    case Actions.ActionTypes.SaveSuccess:
      return State.isSaving(s) ? State.ready(s) : s;
    case Actions.ActionTypes.GoToLogin:
      return LoginState.ready();
  }
};
