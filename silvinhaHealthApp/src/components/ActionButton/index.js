import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ActionButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.styles]} onPress={props.action}>
      <Ionicons
        name={props.icon}
        size={24}
        color={colors.light}
      />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
