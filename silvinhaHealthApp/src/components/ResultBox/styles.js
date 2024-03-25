import { colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
      },
      text: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: "bold",
      },
      textImc: {
        fontSize: 48,
        color: colors.primary,
        fontWeight: "bold",
      }
});