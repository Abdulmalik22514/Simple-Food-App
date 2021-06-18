import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Tick } from "../assets/svg";
import * as Colors from "../common/colors";

export const CustomInput = ({
  placeholder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  isActive,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputBox, isActive && styles.red]}>
        <TextInput
          value={value}
          keyboardType={type}
          style={styles.username}
          placeholder={placeholder}
          placeholderTextColor="#4A4A4A"
          onChangeText={onChange}
          secureTextEntry={secure}
        />
        {isActive ? (
          <View style={styles.tickBox}>
            <Tick />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  red: {
    borderColor: Colors.Orange,
  },
  username: {
    fontSize: 18,
    marginRight: 10,
    padding: 3,
    fontWeight: "400",
    color: "#4A4A4A",
    width: "91%",
  },
  label: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 5,
    color: "#4A4A4A",
    fontWeight: "400",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#9DA8B6",
  },
  tickBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    backgroundColor: "#73CC0B",
    borderRadius: 9,
    marginBottom: 10,
  },
});
