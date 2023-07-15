import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Loan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loan}>
      <View style={styles.loanChild} />
      <View style={[styles.loanWrapper, styles.wrapperPosition]}>
        <Text style={[styles.loan1, styles.saveTypo]}>Loan</Text>
      </View>
      <Pressable
        style={[styles.vectorWrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("AccountProfile")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.saveWrapper}
        onPress={() => navigation.navigate("AccountProfile")}
      >
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <Text style={[styles.addLoanDetails, styles.textTypo]}>
        Add Loan details
      </Text>
      <View style={[styles.component5, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Amount</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component6, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Days</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component7, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Interest (%)</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component8, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Penalty (%)</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    top: 25,
    left: 18,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  textTypo: {
    color: Color.gray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  componentLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    height: 56,
    width: 358,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    left: "50%",
    marginLeft: -179,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  loanChild: {
    top: 0,
    left: 0,
    width: 393,
    height: 80,
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  loan1: {
    fontSize: FontSize.size_3xl,
  },
  loanWrapper: {
    width: 357,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    top: 25,
  },
  vectorIcon: {
    height: 21,
    width: 22,
  },
  vectorWrapper: {
    width: 22,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    top: 25,
  },
  save: {
    fontSize: FontSize.size_base,
  },
  saveWrapper: {
    top: 743,
    left: 111,
    width: 171,
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  addLoanDetails: {
    top: 100,
    left: 18,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text: {
    width: 280,
  },
  mingcutedownFillIcon: {
    height: 22,
    display: "none",
    marginLeft: 10,
    width: 22,
    overflow: "hidden",
  },
  component5: {
    top: 136,
  },
  component6: {
    top: 211,
  },
  component7: {
    top: 286,
  },
  component8: {
    top: 361,
  },
  loan: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Loan;
