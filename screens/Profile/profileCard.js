import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Colors from "../../common/colors";

export const ProfileCard = ({
  imageSource,
  first_name,
  last_name,
  email,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onPress}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: imageSource }}
        resizeMode="contain"
      />

      <View>
        <View style={styles.nameBox}>
          <Text style={styles.firstName}>{first_name} </Text>
          <Text style={styles.firstName}>{last_name}</Text>
        </View>
        <Text style={styles.firstName}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Orange,
    width: "100%",
    height: 80,
    marginTop: 30,
    borderRadius: 5,
    padding: 10,
  },
  firstName: {
    color: "white",
    fontSize: 17,
  },
  tinyLogo: {
    height: 60,
    width: 60,
    marginRight: 25,
    borderRadius: 5,
  },
  nameBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
});
