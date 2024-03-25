import React, { useEffect } from "react";
import { Link } from "expo-router";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { colors } from "../theme/colors"

export default function Welcome() {
  const image = require("../assets/avatar.jpg");

  let runAnimation;

  useEffect(() => {
    runAnimation.play();
  }, []);

  return (
    <>
      <LottieView
        style={styles.container}
        ref={(animation) => {
          runAnimation = animation;
        }}
        source={require("../assets/fundo.json")}
        autoPlay={true}
        loop={true}
        height={Dimensions.get('window').height+200}
        width={Dimensions.get('window').width+100}
      />
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Text style={[styles.title, { fontSize: 56 }]}>Silvinha</Text>
        <Text style={styles.title}>Health App</Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
    left: -60
  },
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    borderColor: colors.primary,
    borderWidth: 20,
    borderRadius: 125,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: colors.light,
    fontWeight: "bold",
  },
  button: {
    marginTop: 50,
    paddingHorizontal: 60,
    paddingVertical: 15,
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 24,
    color: colors.light,
    fontWeight: "bold",
  },
});
