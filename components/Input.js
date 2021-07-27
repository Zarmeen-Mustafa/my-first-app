import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { COLORS } from "../colors";

export default function Input(props) {
  const [text, setText] = useState("");

  return (
    <View style={styles.tag}>
      <TextInput
        label="Email"
        value={text}
        style={styles.input}
        selectionColor={COLORS.white}
        placeholderTextColor={COLORS.white}
        placeholder="12"
        onChangeText={(text) => setText(text)}
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
