import type { GenericAction } from "../../redux/types";
import * as RegistrationAction from "../registration/types/Actions";

export type Action = RegistrationAction.Actions;

export const isAction = (s: GenericAction): s is Action => RegistrationAction.isActions(s);
