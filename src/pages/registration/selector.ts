import { State as PageState } from "../types/State";
import * as State from "./types/State";

export const selector = (s: PageState): s is State.State => State.isState(s);
