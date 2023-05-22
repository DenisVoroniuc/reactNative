import { Epic, combineEpics, EpicMiddleware } from "redux-observable";
import { GenericAction } from "./types";
import { State } from "./State";
import { epicCreator as pageEpic } from "../pages/observable";

export type GenericEpic = Epic<GenericAction, GenericAction, State, any>;

export type GenericEpicMiddleware = EpicMiddleware<GenericAction, GenericAction, State, any>;

export const rootEpic: GenericEpic = combineEpics(pageEpic);
