import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import CardFooter from "../components/cardFooter";
import { TagSelect } from "react-native-tag-select";
import SecondCardFooterContent from "../components/secondCardFooterContent";
import { COLORS } from "../colors.js";

export default class middleContentSection extends Component {
  render() {
    const data = [
      { id: 1, label: "DIN A" },
      { id: 2, label: "DIN B" },
      { id: 3, label: "DIN C" },
      { id: 4, label: "DIN D" },
      { id: 5, label: "US Formate" },
      { id: 6, label: "JIS B" },
    ];
    return (
      <View style={styles.middleContainer}>
        <View style={styles.body}>
          <TagSelect
            itemStyleSelected={{
              backgroundColor: COLORS.card2Text,
              borderWidth: 0,
            }}
            itemLabelStyleSelected={{
              color: "white",
            }}
            itemLabelStyle={{
              color: COLORS.card2Text,
              fontFamily: "Montserrat_400Regular",
              fontWeight: "400",
              fontSize: 12,
              lineHeight: 14.63,
            }}
            itemStyle={{
              height: 30,
              backgroundColor: "white",
              justifyContent: "center",
            }}
            data={data}
            max={1}
            ref={(tag) => {
              this.tag = tag;
            }}
            onMaxError={() => {
              Alert.alert("Ops", "Max reached");
            }}
          />
        </View>
        <CardFooter style={styles.cardFooter}>
          <SecondCardFooterContent />
        </CardFooter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  middleContainer: { width: "100%", flex: 1 },
  body: { padding: 20, height: 110 },
  cardFooter: {
    height: 45,
    minHeight: 45,
    backgroundColor: COLORS.card2Footer,
  },
});
