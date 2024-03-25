import { colors } from "../../theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    subTitle:{
      width: '100%',
      textAlign: 'center',
      fontSize: 24,
      color: colors.primary,
      fontWeight: 'bold',
      marginBottom: 30
    },
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
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
      },
      linkText: {
        color: colors.light,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 5
      }
})