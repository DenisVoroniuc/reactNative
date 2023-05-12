import { GenericState } from "./types";
import * as RegisterStates from "../pages/registration/types/State";

export enum StateIds {
  Loading = "loading",
}

export type Loading = GenericState<StateIds.Loading>;

export const loading = (): Loading => ({ stateID: StateIds.Loading });

export const isLoading = (s: GenericState<string>): s is Loading =>
  s.stateID === StateIds.Loading;

export type State = Loading | RegisterStates.State;

export const isState = (s: GenericState): s is State =>
  Object.values(StateIds).includes(s.stateID as StateIds) ||
  RegisterStates.isState(s);
