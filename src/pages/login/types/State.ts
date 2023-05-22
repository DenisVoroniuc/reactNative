import { GenericState } from "../../../redux/types";

export enum StateIds {
  Ready = "login:ready",
}

export type Ready = GenericState<StateIds.Ready>;

export const ready = (): Ready => ({ stateID: StateIds.Ready });

export const isReady = (s: GenericState): s is Ready => s.stateID === StateIds.Ready;

export type State = Ready;

export const isState = (s: GenericState): s is State => Object.values(StateIds).includes(s.stateID as StateIds);
