import React from "react";
import { router } from "expo-router";
import ActionButton from "../ActionButton";

export default function LinkButton(props) {
  return (
    <ActionButton
      icon={props.icon}
      text={props.text}
      action={() => router.navigate(props.link)}
      styles={props.styles}
    />
  );
}
