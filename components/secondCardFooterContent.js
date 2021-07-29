import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../colors.js";

const DATA = [
  { id: "1", name: "A2", length: 594, width: 420 },
  { id: "2", name: "A3", length: 297, width: 420 },
  { id: "3", name: "A4", length: 294, width: 210 },
  { id: "4", name: "A5", length: 210, width: 148 },
  { id: "5", name: "DIN LANG", length: 210, width: 99 },
  { id: "6", name: "Custom", length: 294, width: 210 },
];

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

export default function SecondCardFooterContent() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? COLORS.card1 : COLORS.card2Text;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
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
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
  },
  flatList: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  title: {
    lineHeight: 14.63,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
});
