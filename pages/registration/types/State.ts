import { GenericState } from "../../../redux/types";

export enum StateIds {
  Ready = "registration:ready",
  ValidationError = "registration:validationError",
  Saving = "registration:saving",
  SavingError = "registration:savingError",
  SavingSuccess = "registration:savingSuccess",
}

export type ReadyPayload = {
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
};

export type Ready = GenericState<StateIds.Ready> & ReadyPayload;

export const ready = ({
  passwordConfirmation,
  email,
  firstName,
  lastName,
  password,
}: ReadyPayload): Ready => ({
  stateID: StateIds.Ready,
  passwordConfirmation,
  email,
  firstName,
  lastName,
  password,
});

export const isReady = (s: GenericState): s is Ready =>
  s.stateID === StateIds.Ready;

export type ValidationError = GenericState<StateIds.ValidationError> &
  ReadyPayload;

export const validationError = ({
  passwordConfirmation,
  email,
  firstName,
  lastName,
  password,
}: ReadyPayload): ValidationError => ({
  stateID: StateIds.ValidationError,
  passwordConfirmation,
  email,
  firstName,
  lastName,
  password,
});

export const isValidationError = (s: GenericState): s is ValidationError =>
  s.stateID === StateIds.ValidationError;

export type Saving = GenericState<StateIds.Saving> & ReadyPayload;

export const saving = ({
  passwordConfirmation,
  email,
  firstName,
  lastName,
  password,
}: ReadyPayload): Saving => ({
  stateID: StateIds.Saving,
  passwordConfirmation,
  email,
  firstName,
  lastName,
  password,
});

export const isSaving = (s: GenericState): s is Saving =>
  s.stateID === StateIds.Saving;

export type SavingErrorPayload = ReadyPayload & { errorMessage: string };

export type SavingError = GenericState<StateIds.SavingError> &
  SavingErrorPayload;

export const savingError = ({
  passwordConfirmation,
  email,
  errorMessage,
  firstName,
  lastName,
  password,
}: SavingErrorPayload): SavingError => ({
  stateID: StateIds.SavingError,
  passwordConfirmation,
  email,
  errorMessage,
  firstName,
  lastName,
  password,
});

export const isSavingError = (s: GenericState): s is SavingError =>
  s.stateID === StateIds.SavingError;

export type SavingSuccess = GenericState<StateIds.SavingSuccess>;

export const savingSuccess = (): SavingSuccess => ({
  stateID: StateIds.SavingSuccess,
});

export const isSavingSuccess = (s: GenericState): s is SavingSuccess =>
  s.stateID === StateIds.SavingSuccess;

export type State =
  | Ready
  | ValidationError
  | Saving
  | SavingError
  | SavingSuccess;

export const isState = (s: GenericState): s is State =>
  Object.values(StateIds).includes(s.stateID as StateIds);
