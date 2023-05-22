import { GenericAction } from "./types";
import * as PageActions from "../pages/types/Actions";

export type Actions = PageActions.Action;

export const isActions = (a: GenericAction): a is Actions => PageActions.isAction(a);
