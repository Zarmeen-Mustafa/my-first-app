import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ImageButton(props) {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
      <Image style={props.imageStyle} source={props.imageURL} />
    </TouchableOpacity>
  );
}
