import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";

export type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph = memo(function Paragraph({ children }: ParagraphProps) {
  return <Text style={styles.text}>{children}</Text>;
});

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 14,
  },
});
