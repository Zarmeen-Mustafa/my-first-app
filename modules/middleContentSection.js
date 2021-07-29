import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CardFooter from "../components/cardFooter";
import SecondCardFooterContent from "../components/secondCardFooterContent";
import { COLORS } from "../colors.js";
import TagSelector from "@react-native-pure/tag-selector";

export default function middleContentSection(props) {
  const paperTypes = [
    { name: "DIN A", grammage: 80 },
    { name: "DIN B", grammage: 90 },
    { name: "DIN C", grammage: 100 },
    { name: "DIN D", grammage: 110 },
    { name: "US Formate", grammage: 120 },
    { name: "JIS B", grammage: 160 },
    { name: "Custom", grammage: 0 },
  ];

  const getGrammageFromName = (value) => {
    if (value == "Custom") return props.sheetAttr.grammage;
    else
      return paperTypes.find((paperType) => paperType.name == value).grammage;
  };

  return (
    <View style={styles.middleContainer}>
      <TagSelector
        value={[props.sheetAttr.type]}
        style={styles.body}
        renderTag={(value, index, selected) => {
          return (
            <Text
              key={index}
              style={[
                styles.tagSelector,
                {
                  backgroundColor: selected ? COLORS.card2Text : COLORS.white,
                  color: selected ? COLORS.white : COLORS.card2Text,
                },
              ]}
            >
              {value}
            </Text>
          );
        }}
        onChange={(type, value) => {
          if (type === "select") {
            props.onSheetAttrChange({
              ...props.sheetAttr,
              grammage: getGrammageFromName(value),
              type: value,
            });
          }
        }}
        dataSource={paperTypes.map((paperType) => paperType.name)}
        keyExtractor={(value) => value}
      />

      <CardFooter style={styles.cardFooter}>
        <SecondCardFooterContent
          sheetAttr={props.sheetAttr}
          onSheetAttrChange={props.onSheetAttrChange}
        />
      </CardFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  middleContainer: { width: "100%", flex: 1 },
  body: {
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  tagSelector: {
    height: 30,
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    textAlign: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    lineHeight: 14.63,
  },
  cardFooter: {
    backgroundColor: COLORS.card2Footer,
  },
});
