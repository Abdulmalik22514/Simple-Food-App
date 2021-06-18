import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Images from "../../../assets/images";
import { Trash } from "../../../assets/svg";
import * as Colors from "../../../common/colors";

export const OrderList = [
  {
    foodName: "Cheese Burger",
    toppings: "Beef, Veggies & Chilli",
    price: "2000",
    foodImage: Images.Cheese,
  },
  {
    foodName: "Large Pizza",
    toppings: "Extra Cheese & Toppings",
    price: "2070",
    foodImage: Images.Pizza,
  },
  {
    foodName: "Grilled Turkey",
    toppings: "Sauce and Pepper",
    price: "3500",
    foodImage: Images.Turkey,
  },
  {
    foodName: "Peppersoup",
    toppings: "Beef & Mutton",
    price: "4000",
    foodImage: Images.Soup,
  },
];

export const OrderCard = ({ foodImage, foodName, toppings, price }) => {
  return (
    <View style={styles.itemCont}>
      <View style={styles.leftBox}>
        <Image style={styles.img} source={foodImage} />
        <View>
          <Text style={styles.cheese}>{foodName} </Text>
          <Text style={styles.toppings}>{toppings} </Text>
        </View>
      </View>
      <View style={styles.rightBox}>
        <View>
          <Text style={styles.price}>{`NGN ${price}`} </Text>
        </View>
        <TouchableOpacity style={styles.trashBox}>
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trashBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9E1DA",
  },
  price: {
    fontWeight: "500",
    fontSize: 15.5,
    color: Colors.Black,
    marginRight: 15,
  },
  leftBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  toppings: {
    fontSize: 13,
    fontWeight: "300",
    color: Colors.Black,
  },
  cheese: {
    fontWeight: "700",
    fontSize: 16,
    color: Colors.Black,
    marginBottom: 5,
  },
  img: {
    borderRadius: 9,
    marginRight: 15,
    width: 52,
    height: 55,
  },

  rightBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
});
