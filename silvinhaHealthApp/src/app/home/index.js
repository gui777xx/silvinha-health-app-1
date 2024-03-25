import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { colors } from "../../theme/colors";
import Title from "../../components/Title";
import LinkButton from "../../components/LinkButton";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: colors.light, flex: 1 }}>
      <Title />

      <View style={styles.content}>
        <LinkButton link="/imc" icon="accessibility-outline" text="Calcular IMC" />
        <LinkButton link="/imc" icon="barbell-sharp" text="Peso Ideal" styles={{marginTop: 20}} />
      </View>
      <StatusBar style="light" backgroundColor={colors.secondary} />
    </SafeAreaView>
  );
}
