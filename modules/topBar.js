import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IMAGES } from "../Images";
import ImageButton from "../components/imageButton";

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <Text style={styles.title}>Paper Calculator</Text>

        <ImageButton imageStyles={styles.icon} imageURL={IMAGES.menu} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: 20,
    paddingTop: 44,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 102,
    minHeight: 102,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.5,
  },
  icon: {
    height: 13,
    width: 20,
    resizeMode: "cover",
  },
});
