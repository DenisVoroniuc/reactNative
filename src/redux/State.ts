import { AxiosInstance } from "axios";
import * as RegistrationState from "../pages/registration/types/State";
import * as LoginState from "../pages/login/types/State";

// export type State = { page: RegistrationState.State; client: AxiosInstance };
export type State = RegistrationState.State | LoginState.State;
