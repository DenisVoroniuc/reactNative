import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Background, Header, TextInput, Button } from "../../../components";

export interface Props {
  email: string;
  setEmail: (v: string) => void;
  firstName: string;
  setFirstName: (v: string) => void;
  lastName: string;
  setLastName: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  passwordConfirmation: string;
  setPasswordConfirmation: (v: string) => void;
  goToLogin: () => void;
  signUp: () => void;
}

export const Registration = ({
  email,
  firstName,
  lastName,
  password,
  passwordConfirmation,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPasswordConfirmation,
  goToLogin,
  signUp,
}: Props) => {
  return (
    <Background>
      <Header>Create Account</Header>
      <TextInput label="First Name" returnKeyType="next" value={firstName} onChangeText={setFirstName} />
      <TextInput label="Last Name" returnKeyType="next" value={lastName} onChangeText={setLastName} />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        // autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput label="Password" returnKeyType="next" value={password} onChangeText={setPassword} secureTextEntry />

      <TextInput
        label="Password Confirmation"
        returnKeyType="done"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        secureTextEntry
      />

      <Button mode="contained" onPress={signUp} style={{}}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {},
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
  },
});
