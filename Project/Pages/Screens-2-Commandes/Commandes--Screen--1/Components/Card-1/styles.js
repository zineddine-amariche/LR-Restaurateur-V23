import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../../constants/theme";

export const styles = StyleSheet.create({
  abs: {
    position: "absolute",
    top: -4,
    right: 16,
    zIndex: 15,
  },
  BoxInfo: {
    backgroundColor: COLORS.transparent,
  },
  client: {
    paddingBottom: 5,
  },
  clientText: {
    fontWeight: "700",
    fontSize: 17,
  },
  price: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: "#EEC",
  },
  etat: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },

  TextArticle: {
    fontSize: 15,
    color: COLORS.primary,
    paddingTop: 5,
  },
  TextRed: {
    fontSize: 17,
    color: COLORS.red,
    paddingLeft: 7,
    fontWeight: "600",
  },
  btnToCuisine: {
    flexDirection: "row",
    height: 28,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  TextButton: {
    color: COLORS.primary,
    fontSize: 13,
  },
  img: {
    marginRight: 15,
  },
  Touch: {
    // backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  LoadingButton: {
    flexDirection: "row",
    height: 28,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: 130,
    marginRight: 10,
    marginTop: 10,
  },
});
