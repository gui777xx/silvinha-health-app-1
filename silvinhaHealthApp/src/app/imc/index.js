import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import { colors } from "../../theme/colors";
import Title from "../../components/Title";
import LinkButton from "../../components/LinkButton";
import ActionButton from "../../components/ActionButton";
import InputBox from "../../components/InputBox";
import ResultBox from "../../components/ResultBox";

export default function IMC() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      Keyboard.dismiss();
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ backgroundColor: colors.light, flex: 1 }}>
        <Title />
        <View style={styles.content}>
          <Text style={styles.subTitle}>Calculadora de IMC</Text>

          <InputBox
            label="Altura"
            setState={setHeight}
            state={height}
            placeholder="Ex. 1.70"
            keyboardType="numeric"
          />

          <InputBox
            label="Peso"
            setState={setWeight}
            state={weight}
            placeholder="Ex. 80.360"
            keyboardType="numeric"
            styles={{ marginTop: 10 }}
          />

          <ActionButton
            icon="calculator-sharp"
            text={textButton}
            action={() => validationImc()}
            styles={{ marginTop: 30, marginBottom: 10 }}
          />

          <LinkButton link="/home" icon="home" text="Voltar" />

          <ResultBox message={messageImc} result={imc} />
        </View>
        <StatusBar style="light" backgroundColor={colors.secondary} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
