import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { COLORS } from "../colors";
import CardFooter from "../components/cardFooter";
import FirstCardFooterContent from "../components/firstCardFooterContent";
import ImageButton from "../components/imageButton";
import { IMAGES } from "../Images";

export default function TopContentSection(props) {
  const [sheetImageURL, setSheetImageURL] = useState(IMAGES.paper1);
  const { sheetCount } = props;
  useEffect(() => {
    if (sheetCount <= 1) {
      setSheetImageURL(IMAGES.paper1);
    } else if (sheetCount >= 2 && sheetCount < 10) {
      setSheetImageURL(IMAGES.paper2);
    } else if (sheetCount >= 10 && sheetCount < 25) {
      setSheetImageURL(IMAGES.paper3);
    } else if (sheetCount >= 25 && sheetCount < 50) {
      setSheetImageURL(IMAGES.paper4);
    } else if (sheetCount >= 50) {
      setSheetImageURL(IMAGES.paper5);
    }
  }, [sheetCount]);

  const onPressAdd = () => {
    if (sheetCount < 1000) {
      props.onSheetsChange(sheetCount + 1);
    }
  };

  const onPressMinus = () => {
    if (sheetCount > 0) {
      props.onSheetsChange(sheetCount - 1);
    }
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.body}>
        <Image style={styles.paperImage} source={sheetImageURL} />

        <View style={styles.paperInputContainer}>
          <ImageButton
            buttonStyle={styles.plusContainer}
            onPress={onPressAdd}
            imageStyle={styles.paperCountImage}
            imageURL={IMAGES.plus}
          />

          <ImageButton
            buttonStyle={styles.minusContainer}
            onPress={onPressMinus}
            imageStyle={styles.paperCountImage}
            imageURL={IMAGES.minus}
          />

          <View style={styles.paperCountAbsoluteBox}>
            <View style={styles.paperCountContainer}>
              <TextInput
                selectionColor={COLORS.white}
                keyboardType="numeric"
                textBreakStrategy="simple"
                onChangeText={(input) => props.onSheetsChange(Number(input))}
                defaultValue={sheetCount.toString()}
                style={styles.paperCountInput}
              ></TextInput>

              <Text style={styles.text}>sheets</Text>
            </View>
          </View>
        </View>
      </View>

      <CardFooter style={styles.cardFooter}>
        <FirstCardFooterContent>{props.sheetWeight}</FirstCardFooterContent>
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
