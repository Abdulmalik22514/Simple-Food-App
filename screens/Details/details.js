import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Black } from "../../common/colors";

export default function Details({ navigation, route }) {
  const { first_name, last_name, email, avatar } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <ImageBackground
        source={{ uri: avatar }}
        style={styles.imgBg}
        resizeMode={"cover"}
      >
        <TouchableOpacity
          style={styles.nameBox}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.firstName}>{first_name} </Text>
          <Text style={styles.firstName}>{last_name}</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  firstName: {
    color: Black,
    fontSize: 17,
  },
  email: {
    color: Black,
    fontSize: 17,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imgBg: {
    height: 500,
    paddingTop: 40,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  nameBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
});
