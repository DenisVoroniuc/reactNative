import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";

export type HeaderProps = {
  children: React.ReactNode;
};

export const Header = memo(function Header({ children }: HeaderProps) {
  return <Text style={styles.header}>{children}</Text>;
});

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    paddingVertical: 14,
  },
});
