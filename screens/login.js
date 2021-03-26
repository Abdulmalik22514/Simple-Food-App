import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CustomInput } from "../components/customInput";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.welcome}>Welcome Back!</Text>
      <Text style={styles.account}>Login to your account</Text>
      <Text style={styles.use}>Username</Text>
      <CustomInput placeHolder="Richard" />
      <Text style={styles.pass}>Password</Text>
      <CustomInput />
      <View style={styles.con}>
        <View style={styles.city}>
          <TouchableOpacity style={styles.circle}>
            <View style={styles.checkedCircle} />
          </TouchableOpacity>
          <Text style={styles.remember}>Remember me</Text>
        </View>
        <Text style={styles.forget}>Forgot Password?</Text>
      </View>
      <TouchableOpacity
        style={styles.log}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("select")}
      >
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.new}>
        <Text style={styles.user}>New user?</Text>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.up}> Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
    backgroundColor: "#E5E5E5",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 100,
  },
  account: {
    fontSize: 15,
  },
  use: {
    fontSize: 15,
    marginTop: 60,
  },
  pass: {
    fontSize: 15,
    marginTop: 30,
  },
  con: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  city: {
    flexDirection: "row",
    alignItems: "center",
  },
  forget: {
    fontSize: 15,
    color: "#E25F38",
  },
  remember: {
    fontSize: 15,
    marginLeft: 10,
  },
  circle: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#979797",
    alignItems: "center",
    justifyContent: "center",
  },
  cle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E25F38",
  },
  log: {
    // marginTop: 40,
    backgroundColor: "#E25F38",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 50,
    width: "100%",
    alignSelf: "center",
  },
  login: {
    color: "white",
  },
  new: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  up: {
    color: "#E25F38",
  },
});
