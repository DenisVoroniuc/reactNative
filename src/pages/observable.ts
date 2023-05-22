import { combineEpics } from "redux-observable";
import { epicCreator as registrationEpic } from "./registration/observable";

export const epicCreator = combineEpics(registrationEpic);
