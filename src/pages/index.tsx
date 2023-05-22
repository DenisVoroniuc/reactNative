import React from "react";
import { useSelector } from "react-redux";
import * as State from "./types/State";
import { pageSelector } from "./selector";
import { Registration } from "./registration/containers";
import * as RegistrationState from "./registration/types/State";
import * as LoginState from "./login/types/State";

export const Page = () => {
  const state = useSelector(pageSelector);

  return React.createElement(Pages, state);
};

const Pages = (state: State.State) => {
  if (RegistrationState.isState(state)) {
    return React.createElement(Registration, state);
  }

  if (LoginState.isState(state)) {
    return null;
  }

  return null;
};
