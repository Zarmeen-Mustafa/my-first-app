import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CardFooter from "../components/cardFooter";
import SecondCardFooterContent from "../components/secondCardFooterContent";
import { COLORS } from "../colors.js";
import TagSelector from "@react-native-pure/tag-selector";

export default function middleContentSection(props) {
  const [tagState, setTagState] = useState({
    value: ["DIN A"],
    dataSource: [
      "DIN A",
      "DIN B",
      "DIN C",
      "DIN D",
      "US Formate",
      "JIS B",
      "Custom",
    ],
  });

  // const paperSize = [
  //   { name: "A2", length: 594, width: 420 },
  //   { name: "A3", length: 297, width: 420 },
  //   { name: "A4", length: 294, width: 210 },
  //   { name: "A5", length: 210, width: 148 },
  //   { name: "DIN LANG", length: 210, width: 99 },
  //   { name: "Custom", length: 294, width: 210 },
  // ];

  const paperTypes = [
    { id: "1", name: "DIN A", grammage: 40 },
    { id: "2", name: "DIN B", grammage: 60 },
    { id: "3", name: "DIN C", grammage: 80 },
    { id: "4", name: "DIN D", grammage: 90 },
    { id: "5", name: "US Formate", grammage: 180 },
    { id: "6", name: "JIS B", grammage: 120 },
    { id: "7", name: "Custom", grammage: 10 },
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
        style={{
          flexWrap: "wrap",
          padding: 20,
          height: 110,
        }}
        renderTag={(value, index, selected) => {
          return (
            <Text
              key={index}
              style={{
                height: 30,
                backgroundColor: selected ? COLORS.card2Text : COLORS.white,
                justifyContent: "center",
                borderRadius: 10,
                marginRight: 10,
                marginBottom: 10,
                textAlign: "center",
                paddingVertical: 7,
                paddingHorizontal: 10,
                color: selected ? COLORS.white : COLORS.card2Text,
                fontFamily: "Montserrat_400Regular",
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 14.63,
              }}
            >
              {value}
            </Text>
          );
        }}
        onChange={(type, value) => {
          if (type === "select") {
            props.onSheetTypeChange({
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
        <SecondCardFooterContent />
      </CardFooter>
    </View>
  );
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
