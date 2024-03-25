import { colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 100,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    backgroundColor: colors.secondary
  },
  textTitle: {
    color: colors.light,
    fontSize: 28,
    fontWeight: "bold",
  },
});