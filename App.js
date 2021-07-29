<script src="http://localhost:8097"></script>;
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TopBar from "./modules/topBar";
import TopContentSection from "./modules/topContentSection";
import MiddleContentSection from "./modules/middleContentSection";
import BottomContentSection from "./modules/bottomContentSection";
import Card from "./components/card.js";
import { COLORS } from "./colors.js";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({ Montserrat_700Bold, Montserrat_400Regular });
  const [sheetCount, setSheetCount] = useState(1); // rename sheetCount
  const [sheetWeight, setSheetWeight] = useState(0); // rename sheetCount
  const [sheetAttr, setSheetAttr] = useState({
    length: 420,
    width: 594,
    grammage: 1,
    type: "DIN A",
  }); // rename sheetCount
  // const [sheetCount, setSheetCount] = useState(0); // rename sheetCount

  useEffect(() => {
    setSheetWeight(
      (
        (sheetAttr.length * sheetAttr.width * sheetAttr.grammage * sheetCount) /
        (1000 * 1000)
      ).toFixed(2)
    );
    // console.log("dependency1 and dependency2", sheetCount, sheetAttr);
  }, [sheetCount, sheetAttr]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSheetsCount = (result) => {
    setSheetCount(result);
  };

  return (
    <KeyboardAwareScrollView>
      <TopBar />

      <Card style={styles.card1}>
        <TopContentSection
          sheetCount={sheetCount}
          sheetWeight={sheetWeight}
          onSheetsChange={(result) => handleSheetsCount(result)}
        />
      </Card>

      <Card style={styles.card2}>
        <MiddleContentSection
          sheetAttr={sheetAttr}
          onSheetTypeChange={(result) => setSheetAttr(result)}
        />
      </Card>

      <Card style={styles.card3}>
        <BottomContentSection />
      </Card>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  card1: {
    minHeight: 229,
    height: 229,
    backgroundColor: COLORS.card1,
  },
  card2: {
    minHeight: 155,
    height: 155,
    backgroundColor: COLORS.card2,
  },
  card3: {
    minHeight: 276,
    height: 276,
    backgroundColor: COLORS.card3,
  },
});
