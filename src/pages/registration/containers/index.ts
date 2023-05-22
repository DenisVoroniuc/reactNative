import React from "react";
import { Registration as RegistrationComponent } from "../components";
import * as State from "../types/State";
import * as Actions from "../types/Actions";
import { useDispatch } from "react-redux";

export const Registration = (s: State.State) => {
  const dispatch = useDispatch();

  const { email, firstName, lastName, password, passwordConfirmation } = s;

  const setEmail = React.useCallback((v: string) => {
    console.log("asd");
    return dispatch(Actions.setEmail(v));
  }, []);
  const setFirstName = React.useCallback((v: string) => dispatch(Actions.setFirstName(v)), []);
  const setLastName = React.useCallback((v: string) => dispatch(Actions.setLastName(v)), []);
  const setPassword = React.useCallback((v: string) => dispatch(Actions.setPassword(v)), []);
  const setPasswordConfirmation = React.useCallback((v: string) => dispatch(Actions.setPasswordConfirmation(v)), []);
  const goToLogin = React.useCallback(() => dispatch(Actions.goToLogin()), []);
  const signUp = React.useCallback(() => dispatch(Actions.submit()), []);

  return React.createElement(RegistrationComponent, {
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
    setPasswordConfirmation,
    email,
    firstName,
    lastName,
    password,
    passwordConfirmation,
    goToLogin,
    signUp,
  });
};
