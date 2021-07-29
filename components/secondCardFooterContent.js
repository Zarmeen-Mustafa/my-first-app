import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../colors.js";

const DATA = [
  { name: "A2", length: 594, width: 420 },
  { name: "A3", length: 297, width: 420 },
  { name: "A4", length: 294, width: 210 },
  { name: "A5", length: 210, width: 148 },
  { name: "DIN LANG", length: 210, width: 99 },
  { name: "Custom", length: 294, width: 210 },
];

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

export default function SecondCardFooterContent(props) {
  const handleLengthAndWidth = (item) => {
    var [paperLength, paperWidth] =
      item.name == "Custom"
        ? [props.sheetAttr.length, props.sheetAttr.width]
        : [item.length, item.width];
    props.onSheetAttrChange({
      ...props.sheetAttr,
      length: paperLength,
      width: paperWidth,
      size: item.name,
    });
  };

  const renderItem = ({ item }) => {
    const color =
      item.name === props.sheetAttr.size ? COLORS.card1 : COLORS.card2Text;

    return (
      <Item
        item={item}
        onPress={() => handleLengthAndWidth(item)}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      horizontal={true}
      style={styles.flatList}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      extraData={props.sheetAttr.size}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    paddingRight: 15,
    paddingVertical: 15,
  },
  flatList: {
    marginHorizontal: 20,
  },
  name: {
    lineHeight: 14.63,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
});
