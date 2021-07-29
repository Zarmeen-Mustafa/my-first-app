import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { COLORS } from "../colors";
import Input from "./Input";
import { IMAGES } from "../Images";

export default function SliderRow(props) {
  return (
    <View style={styles.sliderRow}>
      <View style={styles.textRow}>
        <Text style={styles.title}>{props.text}</Text>

        <Input unit={props.unit}></Input>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        thumbImage={IMAGES.circle}
        minimumTrackTintColor={COLORS.card1}
        maximumTrackTintColor={COLORS.card3Tag}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderRow: {
    flex: 0.3,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    lineHeight: 17,
  },
  slider: { width: "100%" },
});
