import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export const Buttons = ({ title, onPress, style, lessMarginTop, loading }) => {
  return (
    <TouchableOpacity
      style={[styles.log, lessMarginTop && styles.lessTop, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator
          color="white"
          size="small"
          style={{ marginTop: 10 }}
        />
      ) : (
        <Text style={styles.login}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  lessTop: {
    marginTop: 40,
  },
  log: {
    backgroundColor: "#E25F38",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    height: 55,
    width: "100%",
    alignSelf: "center",
  },
  login: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
});
