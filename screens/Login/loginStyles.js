import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  user: {
    color: Colors.Black,
    fontSize: 14,
    fontWeight: "300",
  },
  con: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  city: {
    flexDirection: "row",
    alignItems: "center",
  },
  forget: {
    fontSize: 15,
    color: "#E25F38",
    fontWeight: "300",
  },
  remember: {
    fontSize: 15,
    marginLeft: 7,
    color: "#4A4A4A",
    fontWeight: "300",
  },
  circle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#979797",
    alignItems: "center",
    justifyContent: "center",
  },
  new: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
  },
  up: {
    color: "#E25F38",
    fontSize: 14,
    fontWeight: "300",
  },
});
