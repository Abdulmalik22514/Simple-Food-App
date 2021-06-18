import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const SignupStyles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  top: {
    backgroundColor: "#E0E6ED",
    width: "10%",
    height: 5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 3,
    marginBottom: 20,
  },
  here: {
    alignSelf: "center",
    marginTop: 20,
  },
  click: {
    color: "#E25F38",
  },
  conf: {
    backgroundColor: "#FDF3F1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
    height: 50,
    width: "90%",
    alignSelf: "center",
  },
  confirm: {
    fontSize: 15,
    color: "#E25F38",
    fontWeight: "bold",
  },
  proceed: {
    color: "#9DA8B6",
    alignSelf: "center",
    width: "80%",
    textAlign: "center",
    marginTop: 7,
  },
  default: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 21,
    fontWeight: "500",
    color: "#575A65",
    marginBottom: 10,
  },
  modalBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    height: 450,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  login: {
    color: "white",
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
  user: {
    color: Colors.Black,
    fontSize: 14,
    fontWeight: "300",
  },
});
