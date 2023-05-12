import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../redux/Actions";
import * as State from "../redux/State";
import { pageSelector } from "./selector";
import { Registration } from "./registration/components";
import * as RegistrationState from "./registration/types/State";

export const Page = () => {
  const state = useSelector(pageSelector);

  return React.createElement(a, state);
};

const a = (state: State.State) => {
  if (State.isLoading(state)) {
    return <>Loading...</>;
  }
  return RegistrationState.isState(state) ? React.createElement(Registration, state) : null;
};
