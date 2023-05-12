import { GenericActionWithPayload, GenericAction } from "../../../redux/types";

export enum ActionTypes {
  SetEmail = "registration:setEmail",
  SetPassword = "registration:setPassword",
  SetPasswordConfirmation = "registration:setPasswordConfirmation",
  SetFirstName = "registration:setFirstName",
  SetLastName = "registration:setLastName",
  Submit = "registration:submit",
  SaveError = "registration:saveError",
  SaveSuccess = "registration:saveSuccess",
}

export type SetEmail = GenericActionWithPayload<ActionTypes.SetEmail, string>;

export const setEmail = (email: string): SetEmail => ({
  payload: email,
  type: ActionTypes.SetEmail,
});

export const isSetEmail = (a: GenericAction): a is SetEmail => a.type === ActionTypes.SetEmail;

export type SetPassword = GenericActionWithPayload<ActionTypes.SetPassword, string>;

export const setPassword = (email: string): SetPassword => ({
  payload: email,
  type: ActionTypes.SetPassword,
});

export const isSetPassword = (a: GenericAction): a is SetPassword => a.type === ActionTypes.SetPassword;

export type SetPasswordConfirmation = GenericActionWithPayload<ActionTypes.SetPasswordConfirmation, string>;

export const setPasswordConfirmation = (email: string): SetPasswordConfirmation => ({
  payload: email,
  type: ActionTypes.SetPasswordConfirmation,
});

export const isSetPasswordConfirmation = (a: GenericAction): a is SetPasswordConfirmation =>
  a.type === ActionTypes.SetPasswordConfirmation;

export type SetFirstName = GenericActionWithPayload<ActionTypes.SetFirstName, string>;

export const setFirstName = (email: string): SetFirstName => ({
  payload: email,
  type: ActionTypes.SetFirstName,
});

export const isSetFirstName = (a: GenericAction): a is SetFirstName => a.type === ActionTypes.SetFirstName;

export type SetLastName = GenericActionWithPayload<ActionTypes.SetLastName, string>;

export const setLastName = (email: string): SetLastName => ({
  payload: email,
  type: ActionTypes.SetLastName,
});

export const isSetLastName = (a: GenericAction): a is SetLastName => a.type === ActionTypes.SetLastName;

export type Submit = GenericActionWithPayload<ActionTypes.Submit, string>;

export const submit = (email: string): Submit => ({
  payload: email,
  type: ActionTypes.Submit,
});

export const isSubmit = (a: GenericAction): a is Submit => a.type === ActionTypes.Submit;

export type SaveError = GenericActionWithPayload<ActionTypes.SaveError, string>;

export const saveError = (email: string): SaveError => ({
  payload: email,
  type: ActionTypes.SaveError,
});

export const isSaveError = (a: GenericAction): a is SaveError => a.type === ActionTypes.SaveError;

export type SaveSuccess = GenericActionWithPayload<ActionTypes.SaveSuccess, string>;

export const saveSuccess = (email: string): SaveSuccess => ({
  payload: email,
  type: ActionTypes.SaveSuccess,
});

export const isSaveSuccess = (a: GenericAction): a is SaveSuccess => a.type === ActionTypes.SaveSuccess;

export type Actions =
  | SetEmail
  | SetPassword
  | SetPasswordConfirmation
  | SetFirstName
  | SetLastName
  | Submit
  | SaveError
  | SaveSuccess;

export const isActions = (a: GenericAction): a is Actions => Object.values(ActionTypes).includes(a.type as ActionTypes);
