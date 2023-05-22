import type { State } from "../redux/State";
import type { State as PageState } from "./types/State";

export const pageSelector = (s: State): PageState => s;
