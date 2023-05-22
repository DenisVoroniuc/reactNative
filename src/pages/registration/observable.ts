import { filter, from, map, switchMap } from "rxjs";
import { GenericEpic } from "../../redux/observable";
import * as State from "./types/State";
import * as Actions from "./types/Actions";
import { submit } from "./api";
import { combineEpics } from "redux-observable";

const registrationObservable: GenericEpic = (a$, s$, _) =>
  s$.pipe(
    filter(State.isState),
    filter(s => State.isSaving(s)),
    switchMap(() =>
      from(submit()).pipe(
        map(d => d.status),
        map(() => Actions.goToLogin()),
      ),
    ),
  );

export const epicCreator = combineEpics(registrationObservable);
