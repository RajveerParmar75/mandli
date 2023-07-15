import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Component5 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.component5}>
      <View style={[styles.component6, styles.component6FlexBox]}>
        <Text style={styles.text}>Amount</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <Pressable
        style={[styles.confirmWrapper, styles.component6FlexBox]}
        onPress={() => navigation.navigate("LoanTransactions")}
      >
        <Text style={styles.confirm}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  component6FlexBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray,
    width: 280,
    textAlign: "left",
  },
  mingcutedownFillIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
    display: "none",
    marginLeft: 10,
  },
  component6: {
    width: 296,
    height: 56,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  confirm: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.white,
    textAlign: "left",
  },
  confirmWrapper: {
    backgroundColor: Color.mainTheme,
    width: 300,
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_mini,
    marginTop: 25,
    justifyContent: "center",
  },
  component5: {
    width: 358,
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_6xl,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
});

export default Component5;
