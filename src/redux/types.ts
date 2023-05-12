import { Epic } from "redux-observable";
import { State } from "./State";

export type GenericState<T extends string = string> = { stateID: T };

export type GenericAction<T extends string = string> = { type: T };

export type GenericActionWithPayload<T extends string, P extends any> = {
  type: T;
  payload: P;
};

export type GenericEpic = Epic<GenericAction, GenericAction, State>;
