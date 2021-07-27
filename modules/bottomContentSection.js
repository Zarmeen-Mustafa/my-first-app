import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Slider from "@react-native-community/slider";
import SliderRow from "../components/sliderRow.js";

export default function bottomContentSection() {
  return (
    <View style={styles.bottomContainer}>
      <SliderRow text="Grammage" unit="g" />
      <SliderRow text="Width" unit="mm" />
      <SliderRow text="Length" unit="mm" />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    width: "100%",
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
