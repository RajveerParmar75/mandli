import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Component4 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.component4, styles.component4FlexBox]}>
      <View style={styles.component4FlexBox}>
        <Text style={styles.confirm}>Confirm</Text>
        <Text style={[styles.depositRs800, styles.doneTypo]}>
          Deposit Rs. 800
        </Text>
      </View>
      <Pressable
        style={[styles.doneWrapper, styles.component4FlexBox]}
        onPress={() => navigation.navigate("AccountProfile")}
      >
        <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  component4FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  doneTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  confirm: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    width: 300,
    textAlign: "left",
    color: Color.black,
  },
  depositRs800: {
    fontFamily: FontFamily.robotoRegular,
    marginTop: 20,
    width: 300,
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  done: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.white,
  },
  doneWrapper: {
    backgroundColor: Color.mainTheme,
    flexDirection: "row",
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_mini,
    marginTop: 25,
    width: 300,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  component4: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    width: 358,
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_6xl,
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
});

export default Component4;
