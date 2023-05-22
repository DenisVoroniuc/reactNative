import type { GenericState } from "../../redux/types";
import * as RegistrationState from "../registration/types/State";
import * as LoginState from "../login/types/State";

export type State = RegistrationState.State | LoginState.State;

export const isState = (s: GenericState): s is State => RegistrationState.isState(s) || LoginState.isState(s);
