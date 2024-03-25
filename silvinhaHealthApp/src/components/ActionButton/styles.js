import { colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
  text: {
    color: colors.light,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
