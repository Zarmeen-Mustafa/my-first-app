import React, { Component, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLORS } from "../colors";
import CardFooter from "../components/cardFooter";
import FirstCardFooterContent from "../components/firstCardFooterContent";
import { IMAGES } from "../Images";

export default function TopContentSection() {
  const [sheetsState, setSheetsState] = useState({
    sheets: "0",
    sheetsImage: IMAGES["paper" + "1"],
  });

  useEffect(() => {
    if (Number(sheetsState.sheets) <= 1) {
      setSheetsState({ ...sheetsState, sheetsImage: IMAGES["paper" + "1"] });
    } else if (
      Number(sheetsState.sheets) >= 2 &&
      Number(sheetsState.sheets) < 10
    ) {
      setSheetsState({ ...sheetsState, sheetsImage: IMAGES["paper" + "2"] });
    } else if (
      Number(sheetsState.sheets) >= 10 &&
      Number(sheetsState.sheets) < 25
    ) {
      setSheetsState({ ...sheetsState, sheetsImage: IMAGES["paper" + "3"] });
    } else if (
      Number(sheetsState.sheets) >= 25 &&
      Number(sheetsState.sheets) < 50
    ) {
      setSheetsState({ ...sheetsState, sheetsImage: IMAGES["paper" + "4"] });
    } else if (Number(sheetsState.sheets) >= 50) {
      setSheetsState({ ...sheetsState, sheetsImage: IMAGES["paper" + "5"] });
    }
  }, [sheetsState.sheets]);

  const onPressAdd = () => {
    if (Number(sheetsState.sheets) < 1000) {
      setSheetsState({
        ...sheetsState,
        sheets: (Number(sheetsState.sheets) + 1).toString(),
      });
    }
  };
  const onPressMinus = () => {
    if (Number(sheetsState.sheets) > 0) {
      setSheetsState({
        ...sheetsState,
        sheets: (Number(sheetsState.sheets) - 1).toString(),
      });
    }
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.body}>
        <Image style={styles.paperImage} source={sheetsState.sheetsImage} />
        <View style={styles.paperInputContainer}>
          <TouchableOpacity style={styles.plusContainer} onPress={onPressAdd}>
            <Image style={styles.paperCountImage} source={IMAGES.plus} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.minusContainer}
            onPress={onPressMinus}
          >
            <Image style={styles.paperCountImage} source={IMAGES.minus} />
          </TouchableOpacity>
          <View style={styles.paperCountAbsoluteBox}>
            <View style={styles.paperCountContainer}>
              <TextInput
                keyboardType="numeric"
                onChangeText={(input) =>
                  setSheetsState({
                    ...sheetsState,
                    sheets: input,
                  })
                }
                defaultValue={sheetsState.sheets}
                style={styles.paperCountInput}
              ></TextInput>
              <Text style={styles.text}>sheets</Text>
            </View>
          </View>
        </View>
      </View>
      <CardFooter style={styles.cardFooter}>
        <FirstCardFooterContent />
      </CardFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: { width: "100%", flex: 1 },
  body: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    minHeight: 60,
    height: 60,
    justifyContent: "space-between",
  },
  paperImage: { marginVertical: 26, height: 116, width: 96 },
  paperInputContainer: {
    flexDirection: "column",
    marginVertical: 38,
    marginRight: 27,
  },
  plusContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 999,
    marginBottom: 53,
  },
  minusContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 999,
  },
  paperCountImage: { width: 20, height: 20 },
  cardFooter: {
    height: 60,
    minHeight: 60,
    backgroundColor: COLORS.card1Footer,
  },
  paperCountInput: {
    textAlign: "center",
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    lineHeight: 29.26,
  },
  paperCountAbsoluteBox: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
  },
  paperCountContainer: {
    backgroundColor: "rgba(74, 81, 113, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 20,
    height: 74,
    width: 74,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    lineHeight: 12.19,
  },
});
