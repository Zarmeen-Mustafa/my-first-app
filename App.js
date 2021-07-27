<script src="http://localhost:8097"></script>;
import React, { useState } from "react";
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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAwareScrollView>
      <TopBar />
      <Card style={styles.card1}>
        <TopContentSection />
      </Card>
      <Card style={styles.card2}>
        <MiddleContentSection />
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
