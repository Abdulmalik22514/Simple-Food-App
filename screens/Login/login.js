import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CustomInput } from "../../components/customInput";
import { Header } from "../../components/customHeader";
import { Buttons } from "../../components/customButtons";
import { LoginStyles as styles } from "./loginStyles";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ marginTop: 170 }}>
        <Header title="Welcome Back!" label="Login to your account" />
      </View>

      <View style={{ marginTop: 30 }}>
        <CustomInput label="Username" isActive />
        <CustomInput label="Password" secure />
      </View>

      <View style={styles.con}>
        <View style={styles.city}>
          <TouchableOpacity style={styles.circle}>
            <View style={styles.checkedCircle} />
          </TouchableOpacity>
          <Text style={styles.remember}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forget}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Buttons title="LOGIN" onPress={() => navigation.navigate("select")} />
      <View style={styles.new}>
        <Text style={styles.user}>New user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={styles.up}> Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
