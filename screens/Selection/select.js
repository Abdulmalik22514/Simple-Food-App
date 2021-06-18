import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Cart, Search } from "../../assets/svg";
import {
  ItemCard,
  Recommended,
  RecommendedFood,
  SelectList,
} from "./utils/itemCard";
import * as Colors from "../../common/colors";
import { Header } from "../../components/customHeader";
import { SelectStyles as styles } from "./selectStyles";

export default function Selection({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.conf}
        onPress={() => navigation.navigate("order")}
      >
        <Cart />
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <Header title="Hello, John" label="Select your meal for the day" />
      </View>
      <View style={styles.search}>
        <Search />
        <TextInput
          style={styles.log}
          placeholder="search for meals, dishes"
          placeholderTextColor={Colors.Black}
        />
      </View>
      {SelectList.map((item, index) => (
        <ItemCard
          key={index}
          foodImage={item.foodImage}
          foodName={item.foodName}
          toppings={item.toppings}
        />
      ))}
      <View style={styles.recall}>
        <Text style={styles.reco}>Recommended</Text>
        <Text style={styles.all}>View all</Text>
      </View>
      <View style={styles.last}>
        {Recommended.map((item, index) => {
          return <RecommendedFood key={index} pix={item.pix} />;
        })}
      </View>
    </View>
  );
}
