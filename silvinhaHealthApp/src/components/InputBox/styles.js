import { colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    color: colors.dark,
    fontSize: 18,
  },
  input: {
    height: 40,
    width: "100%",
    fontSize: 18,
    backgroundColor: colors.light,
    borderColor: colors.primary,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});