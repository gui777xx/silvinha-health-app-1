import { colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: colors.light
  },
  linkButton: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
  linkText: {
    color: colors.light,
    fontSize: 24,
    fontWeight: 'bold',
  }
});
