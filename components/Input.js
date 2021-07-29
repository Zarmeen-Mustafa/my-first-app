import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { COLORS } from "../colors";

export default function Input(props) {
  return (
    <View style={styles.tag}>
      <TextInput
        label="Email"
        value={props.value}
        style={styles.input}
        keyboardType="numeric"
        selectionColor={COLORS.white}
        textBreakStrategy="simple"
        maxLength={3}
        onChangeText={(value) => props.onValueChange(value)}
      />

      <Text style={styles.unit}>{props.unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: COLORS.card3Tag,
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: COLORS.white,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    lineHeight: 14.63,
  },
  unit: {
    color: COLORS.white,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    lineHeight: 14.63,
  },
});
