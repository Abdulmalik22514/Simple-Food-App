import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { CustomInput } from "../../components/customInput";
import { Header } from "../../components/customHeader";
import { Buttons } from "../../components/customButtons";
import * as Images from "../../assets/images";
import { SignupStyles as styles } from "./signupStyles";

export default function Signup({ navigation }) {
  const [modalState, setModalState] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Register = () => {
    const data = {
      // username: user,
      email,
      password,
    };
    setLoading(true);
    fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          Alert.alert(res.error);
        } else Alert.alert("My response", "Registration successful");
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ marginTop: 170 }}>
        <Header
          title="Create your Account"
          label="It’s free and easy to set up!"
        />
      </View>

      <View style={{ marginTop: 30 }}>
        {/* <CustomInput
          label="Username"
          onChange={setUser}
          value={user}
          isActive
        /> */}
        <CustomInput value={email} onChange={setEmail} label="Email" />
        <CustomInput value={password} onChange={setPassword} label="Password" />
      </View>

      <Buttons title="SIGNUP" loading={loading} onPress={() => Register()} />

      <View style={styles.new}>
        <Text style={styles.user}>Existing user?</Text>
        <TouchableOpacity
          style={styles.log}
          activeOpacity={0.7}
          onPress={() => setModalState(true)}
        >
          <Text style={styles.up}> Signin</Text>
        </TouchableOpacity>
      </View>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.top}></View>
            <Image
              source={Images.Modal}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.default}>Default Wallet Selection</Text>
            <Text style={styles.proceed}>
              If you proceed, All cards transactions will be charged from the
              selected wallet.
            </Text>
            <TouchableOpacity
              style={styles.conf}
              onPress={() => navigation.navigate("select")}
            >
              <Text style={styles.confirm}>CONFIRM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.here}
              onPress={() => setModalState(false)}
            >
              <Text style={styles.click}>Click here to cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
