import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export default function InputBox(props) {
  return (
    <View style={props.styles}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={props.setState}
          value={props.state ?? ''}
          placeholder={props.placeholder ?? ''}
          keyboardType={props.keyboardType ?? 'default'}
        />
    </View>
  );
}
