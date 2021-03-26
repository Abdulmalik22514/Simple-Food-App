import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./screens/signUp";
import Login from "./screens/login";
import Order from "./screens/order";
import Select from "./screens/select";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="false">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="select" component={Select} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
