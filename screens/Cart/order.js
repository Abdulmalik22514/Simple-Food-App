import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/customHeader";
import { OrderCard, OrderList } from "./utils/orderCard";
import { Buttons } from "../../components/customButtons";
import { OrderStyles as styles } from "./orderStyles";

export default function Order({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Header
          title="My Orders"
          label="Welcome to your cart, preview items below."
        />
      </View>
      <View style={{ marginTop: 50 }}>
        {OrderList.map((item, index) => {
          return (
            <OrderCard
              key={index}
              foodImage={item.foodImage}
              foodName={item.foodName}
              toppings={item.toppings}
              price={item.price}
            />
          );
        })}
      </View>

      <View style={styles.total}>
        <Text style={styles.tot}>Total:</Text>
        <Text style={styles.money}>{`NGN ${20000}`}</Text>
      </View>
      <Buttons
        title="CHECKOUT"
        onPress={() => navigation.navigate("profile")}
        lessMarginTop
      />
    </View>
  );
}
