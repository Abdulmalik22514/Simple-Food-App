import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Back } from "../../assets/svg";
import { ProfileCard } from "./profileCard";

export default function Profile({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => console.error(error))
      .finally();
  };
  const _renderItem = ({ item }) => {
    const { first_name, last_name, email, avatar } = item;
    return (
      <ProfileCard
        imageSource={avatar}
        first_name={first_name}
        last_name={last_name}
        email={email}
        onPress={() =>
          navigation.navigate("details", {
            first_name,
            last_name,
            email,
            avatar,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.header}>
        <Back />
        <Text style={styles.users}>User's List</Text>
      </View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  users: {
    fontSize: 25,
    color: "#4A4A4A",
    marginLeft: 50,
    fontWeight: "700",
  },
});
