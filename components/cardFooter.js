import React from "react";
import { View, StyleSheet } from "react-native";

export default function CardFooter(props) {
  return <View style={[styles.cardFooter, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  cardFooter: {
    flexDirection: "row",
    width: "100%",
  },
});
