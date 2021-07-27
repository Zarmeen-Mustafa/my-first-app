import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../colors.js";

const DATA = [
  {
    id: "1",
    title: "A2",
  },
  {
    id: "2",
    title: "A3",
  },
  {
    id: "3",
    title: "A4",
  },
  {
    id: "4",
    title: "A5",
  },
  {
    id: "5",
    title: "A6",
  },
  {
    id: "6",
    title: "DIN LANG",
  },
];

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
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
