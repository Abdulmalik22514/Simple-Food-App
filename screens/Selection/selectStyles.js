import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const SelectStyles = StyleSheet.create({
  conf: {
    alignItems: "center",
    marginTop: 30,
    alignSelf: "flex-end",
  },
  all: {
    fontSize: 14,
    fontWeight: "300",
    color: Colors.Black,
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  recall: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    alignItems: "center",
  },
  reco: {
    fontWeight: "700",
    fontSize: 15,
    color: Colors.Black,
  },
  log: {
    marginLeft: 15,
    marginRight: 10,
    fontSize: 14,
    fontWeight: "300",
  },
  search: {
    marginTop: 25,
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    width: "100%",
    borderRadius: 9,
    height: 45,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
});
