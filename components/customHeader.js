import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = ({ title, label }) => {
  return (
    <View>
      <Text style={styles.welcome}>{title}</Text>
      <Text style={styles.account}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 29,
    fontWeight: "700",
    color: "#4A4A4A",
    marginBottom: 8,
  },
  account: {
    fontSize: 14,
    color: "#4A4A4A",
    fontWeight: "300",
  },
});
