import React, { Component, useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import CardFooter from "../components/cardFooter";
import SecondCardFooterContent from "../components/secondCardFooterContent";
import { COLORS } from "../colors.js";
import TagSelector from "@react-native-pure/tag-selector";

export default function middleContentSection() {
  // const data = [
  //   { id: 1, label: "DIN A" },
  //   { id: 2, label: "DIN B" },
  //   { id: 3, label: "DIN C" },
  //   { id: 4, label: "DIN D" },
  //   { id: 5, label: "US Formate" },
  //   { id: 6, label: "JIS B" },
  // ];
  const [tagState, setTagState] = useState({
    value: [],
    dataSource: [
      "DIN A",
      "DIN B",
      "DIN C",
      "DIN D",
      "US Formate",
      "JIS B",
      "Custom",
      "DIN A1",
      "DIN B1",
      "DIN C1",
      "DIN D1",
      "US For1mate",
      "JIS B1",
      "Custom1",
    ],
  });
  return (
    <View style={styles.middleContainer}>
      <TagSelector
        value={tagState.value}
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
            setTagState({ ...tagState, value: [value] });
          }
          if (type === "unselect") {
            setTagState({ ...tagState, value: [] });
          }
        }}
        dataSource={tagState.dataSource}
        keyExtractor={(value) => value}
      />
      {/* <TagSelector
          maxHeight={70}
          expandCaptions={["more", "less"]}
          expdandedContainerStyle={styles.containerExpanded}
          containerStyle={styles.container}
          selectedTagStyle={styles.tagSelected}
          tagStyle={styles.tag}
          separatorStyle={styles.separator}
          expandBtnStyle={styles.btnStyle}
          expandTextStyle={styles.btnText}
          tags={this.tags}
          onChange={(selected) => this.setState({ selectedTags: selected })}
        /> */}

      {/* <TagSelect
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
          /> */}
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
