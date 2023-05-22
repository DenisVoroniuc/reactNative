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
  GoToLogin = "registration:goToLogin",
}

export type SetEmail = GenericActionWithPayload<ActionTypes.SetEmail, string>;

export const setEmail = (payload: string): SetEmail => ({
  payload,
  type: ActionTypes.SetEmail,
});

export const isSetEmail = (a: GenericAction): a is SetEmail => a.type === ActionTypes.SetEmail;

export type SetPassword = GenericActionWithPayload<ActionTypes.SetPassword, string>;

export const setPassword = (payload: string): SetPassword => ({
  payload,
  type: ActionTypes.SetPassword,
});

export const isSetPassword = (a: GenericAction): a is SetPassword => a.type === ActionTypes.SetPassword;

export type SetPasswordConfirmation = GenericActionWithPayload<ActionTypes.SetPasswordConfirmation, string>;

export const setPasswordConfirmation = (payload: string): SetPasswordConfirmation => ({
  payload,
  type: ActionTypes.SetPasswordConfirmation,
});

export const isSetPasswordConfirmation = (a: GenericAction): a is SetPasswordConfirmation =>
  a.type === ActionTypes.SetPasswordConfirmation;

export type SetFirstName = GenericActionWithPayload<ActionTypes.SetFirstName, string>;

export const setFirstName = (payload: string): SetFirstName => ({
  payload,
  type: ActionTypes.SetFirstName,
});

export const isSetFirstName = (a: GenericAction): a is SetFirstName => a.type === ActionTypes.SetFirstName;

export type SetLastName = GenericActionWithPayload<ActionTypes.SetLastName, string>;

export const setLastName = (payload: string): SetLastName => ({
  payload,
  type: ActionTypes.SetLastName,
});

export const isSetLastName = (a: GenericAction): a is SetLastName => a.type === ActionTypes.SetLastName;

export type Submit = GenericAction<ActionTypes.Submit>;

export const submit = (): Submit => ({
  type: ActionTypes.Submit,
});

export const isSubmit = (a: GenericAction): a is Submit => a.type === ActionTypes.Submit;

export type SaveError = GenericActionWithPayload<ActionTypes.SaveError, string>;

export const saveError = (errorMessage: string): SaveError => ({
  payload: errorMessage,
  type: ActionTypes.SaveError,
});

export const isSaveError = (a: GenericAction): a is SaveError => a.type === ActionTypes.SaveError;

export type SaveSuccess = GenericAction<ActionTypes.SaveSuccess>;

export const saveSuccess = (): SaveSuccess => ({
  type: ActionTypes.SaveSuccess,
});

export const isSaveSuccess = (a: GenericAction): a is SaveSuccess => a.type === ActionTypes.SaveSuccess;

export type GoToLogin = GenericAction<ActionTypes.GoToLogin>;

export const goToLogin = (): GoToLogin => ({
  type: ActionTypes.GoToLogin,
});

export const isGoToLogin = (a: GenericAction): a is GoToLogin => a.type === ActionTypes.GoToLogin;

export type Actions =
  | SetEmail
  | SetPassword
  | SetPasswordConfirmation
  | SetFirstName
  | SetLastName
  | Submit
  | SaveError
  | SaveSuccess
  | GoToLogin;

export const isActions = (a: GenericAction): a is Actions => Object.values(ActionTypes).includes(a.type as ActionTypes);
