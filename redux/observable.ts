import { combineEpics } from "redux-observable";
import { GenericAction } from "./types";
import { EMPTY, Observable } from "rxjs";

const qwe = () => EMPTY as Observable<GenericAction>;

export const rootEpic = combineEpics(qwe);
