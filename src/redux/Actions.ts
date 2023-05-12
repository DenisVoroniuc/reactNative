import { GenericAction } from "./types";

export enum ActionTypes {
  Load = "load",
}

export type Load = GenericAction<ActionTypes.Load>;

export const load = (): Load => ({ type: ActionTypes.Load });

export const isLoad = (a: GenericAction): a is Load => a.type === ActionTypes.Load;

export type Actions = Load;
