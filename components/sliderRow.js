import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { COLORS } from "../colors";
import Input from "./Input";
import { IMAGES } from "../Images";

export default function SliderRow(props) {
  const handleSheetAttr = (value) => {
    if (props.text == "Width") {
      console.log(props.text, props.sheetAttr[props.text.toLowerCase()], value);

      props.onSheetAttrChange({
        ...props.sheetAttr,
        width: value,
        size: "Custom",
      });
    } else if (props.text == "Grammage")
      props.onSheetAttrChange({
        ...props.sheetAttr,
        grammage: value,
        type: "Custom",
      });
    else if (props.text == "Length")
      props.onSheetAttrChange({
        ...props.sheetAttr,
        length: value,
        size: "Custom",
      });

    console.log(props.text, props.sheetAttr[props.text.toLowerCase()], value);
  };

  return (
    <View style={styles.sliderRow}>
      <View style={styles.textRow}>
        <Text style={styles.title}>{props.text}</Text>

        <Input
          unit={props.unit}
          value={props.sheetAttr[props.text.toLowerCase()].toString()}
          onValueChange={(value) => {
            handleSheetAttr(Number(value));
          }}
        ></Input>
      </View>

      <Slider
        value={props.sheetAttr[props.text.toLowerCase()]}
        style={styles.slider}
        minimumValue={props.min}
        maximumValue={props.max}
        thumbImage={IMAGES.circle}
        minimumTrackTintColor={COLORS.card1}
        maximumTrackTintColor={COLORS.card3Tag}
        onSlidingComplete={(value) => {
          handleSheetAttr(value);
        }}
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
