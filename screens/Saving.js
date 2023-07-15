import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component4 from "../components/Component4";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Saving = () => {
  const navigation = useNavigation();
  const [frameContainer2Visible, setFrameContainer2Visible] = useState(false);

  const openFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(true);
  }, []);

  const closeFrameContainer2 = useCallback(() => {
    setFrameContainer2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.saving}>
        <View style={styles.savingChild} />
        <View style={[styles.savingWrapper, styles.wrapperPosition]}>
          <Text style={[styles.saving1, styles.submitTypo]}>Saving</Text>
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
        <Pressable style={styles.submitWrapper} onPress={openFrameContainer2}>
          <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
        </Pressable>
        <View style={[styles.component4, styles.componentLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Deposit</Text>
          <Image
            style={styles.mingcutedownIconLayout}
            contentFit="cover"
            source={require("../assets/mingcutedownfill.png")}
          />
        </View>
        <Text style={[styles.addTransactionOn, styles.textTypo]}>
          Add transaction on saving
        </Text>
        <View style={[styles.component5, styles.componentLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Amount</Text>
          <Image
            style={[
              styles.mingcutedownFillIcon1,
              styles.mingcutedownIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mingcutedownfill.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer2Visible}>
        <View style={styles.frameContainer2Overlay}>
          <Pressable
            style={styles.frameContainer2Bg}
            onPress={closeFrameContainer2}
          />
          <Component4 onClose={closeFrameContainer2} />
        </View>
      </Modal>
    </>
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
  submitTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  componentLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    height: 56,
    width: 358,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    left: "50%",
    marginLeft: -179,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo: {
    color: Color.gray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  mingcutedownIconLayout: {
    marginLeft: 10,
    height: 22,
    width: 22,
    overflow: "hidden",
  },
  savingChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.mainTheme,
    width: 393,
    height: 80,
    position: "absolute",
  },
  saving1: {
    fontSize: FontSize.size_3xl,
    color: Color.white,
  },
  savingWrapper: {
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
  frameContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  submit: {
    fontSize: FontSize.size_base,
    color: Color.mainTheme,
  },
  submitWrapper: {
    top: 742,
    left: 110,
    borderColor: "#6e78d4",
    borderWidth: 2,
    width: 173,
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_mini,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text: {
    width: 280,
  },
  component4: {
    top: 136,
  },
  addTransactionOn: {
    top: 100,
    left: 18,
    color: Color.gray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  mingcutedownFillIcon1: {
    display: "none",
  },
  component5: {
    top: 211,
  },
  saving: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Saving;
