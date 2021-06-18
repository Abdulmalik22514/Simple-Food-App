import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Images from "../../../assets/images";
import { Star } from "../../../assets/svg";
import * as Colors from "../../../common/colors";

export const SelectList = [
  {
    foodName: "Cheese Burger",
    toppings: "Beef, Veggies & Chilli",
    foodImage: Images.Burger,
  },
  {
    foodName: "Jollof Rice",
    toppings: "Grilled Chicken, Veggies & Sauce",
    foodImage: Images.Rice,
  },
];

export const ItemCard = ({ foodName, toppings, foodImage }) => {
  return (
    <View style={styles.items}>
      <Image style={styles.img} source={foodImage} />
      <View style={{ marginLeft: 17 }}>
        <Text style={styles.cheese}>{foodName} </Text>
        <Text style={styles.top}>{toppings} </Text>
        <View style={styles.rating}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </View>
      </View>
    </View>
  );
};

export const Recommended = [
  {
    pix: Images.Cheese,
  },
  {
    pix: Images.Pizza,
  },
  {
    pix: Images.Turkey,
  },
  {
    pix: Images.Soup,
  },
];

export const RecommendedFood = ({ pix }) => {
  return <Image source={pix} style={styles.last1} />;
};

const styles = StyleSheet.create({
  items: {
    marginTop: 30,
    width: "100%",
    height: 200,
  },
  last1: {
    width: 67,
    borderRadius: 10,
    height: 70,
  },
  img: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: 140,
  },
  cheese: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
    color: Colors.Black,
  },
  top: {
    marginBottom: 7,
    fontWeight: "300",
    fontSize: 12,
    color: Colors.Black,
  },
  rating: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
