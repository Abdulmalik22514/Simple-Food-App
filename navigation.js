import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/Signup/signUp";
import Login from "./screens/Login/login";
import Order from "./screens/Cart/order";
import Selection from "./screens/Selection/select";
import Profile from "./screens/Profile/profile";
import Details from "./screens/Details/details";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="false">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="select" component={Selection} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
