import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import SliderRow from "../components/sliderRow.js";

export default function bottomContentSection(props) {
  return (
    <View style={styles.bottomContainer}>
      <SliderRow
        max={999}
        min={0}
        text="Grammage"
        unit="g"
        sheetAttr={props.sheetAttr}
        onSheetAttrChange={props.onSheetAttrChange}
      />

      <SliderRow
        max={999}
        min={0}
        text="Width"
        unit="mm"
        sheetAttr={props.sheetAttr}
        onSheetAttrChange={props.onSheetAttrChange}
      />

      <SliderRow
        max={999}
        min={0}
        text="Length"
        unit="mm"
        sheetAttr={props.sheetAttr}
        onSheetAttrChange={props.onSheetAttrChange}
      />
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
