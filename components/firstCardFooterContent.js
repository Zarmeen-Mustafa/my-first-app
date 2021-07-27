import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FirstCardFooterContent() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Per Copy</Text>
      <Text style={styles.weight}>4.65</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  footerText: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.63,
    paddingVertical: 7,
    color: "white",
  },
  weight: {
    fontFamily: "Montserrat_700Bold",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29.26,
    color: "white",
  },
});
