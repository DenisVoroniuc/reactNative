import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

export type ButtonProps = React.ComponentProps<typeof PaperButton>;

export const Button = memo(function ({ mode, style, children, ...props }: ButtonProps) {
  return (
    <PaperButton style={[styles.button, style]} labelStyle={styles.text} mode={mode} {...props}>
      {children}
    </PaperButton>
  );
});

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
