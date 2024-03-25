import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function ResultBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
      <Text style={styles.textImc}>{props.result}</Text>
    </View>
  );
}