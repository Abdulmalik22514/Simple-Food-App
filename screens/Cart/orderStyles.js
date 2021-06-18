import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const OrderStyles = StyleSheet.create({
  money: {
    fontWeight: "700",
    fontSize: 27,
    color: Colors.Black,
  },
  tot: {
    fontSize: 17,
    fontWeight: "500",
    color: Colors.Black,
  },
  log: {
    backgroundColor: "#E25F38",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: 50,
    width: "100%",
    alignSelf: "center",
  },
  login: {
    color: "white",
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 10,
  },

  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
  ord: {
    fontWeight: "bold",
    marginTop: 70,
    fontSize: 40,
  },
  cart: {
    marginTop: 5,
    marginBottom: 30,
  },
});
