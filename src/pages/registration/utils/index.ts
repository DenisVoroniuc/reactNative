import { ReadyPayload } from "../types/State";

export const createInitialStatePayload = (): ReadyPayload => ({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirmation: "",
});
