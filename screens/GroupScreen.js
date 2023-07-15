import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const GroupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginParent}>
      <View style={styles.login}>
        <Text style={[styles.login1, styles.login1Position]}>Login</Text>
        <Text
          style={[styles.pleaseSignIn, styles.textTypo]}
        >{`Please sign in to continue `}</Text>
        <View style={[styles.component4Parent, styles.login1Position]}>
          <View style={styles.componentLayout}>
            <Text style={[styles.text, styles.textTypo]}>Username</Text>
            <Image
              style={styles.mingcutedownFillIcon}
              contentFit="cover"
              source={require("../assets/mingcutedownfill1.png")}
            />
          </View>
          <View style={[styles.component3, styles.componentLayout]}>
            <Text style={[styles.text, styles.textTypo]}>Password</Text>
            <Image
              style={styles.mingcutedownFillIcon}
              contentFit="cover"
              source={require("../assets/mingcutedownfill1.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.loginWrapper}
          onPress={() => navigation.navigate("HomeSaving")}
        >
          <Text style={styles.login2}>Login</Text>
        </Pressable>
        <View style={[styles.loginChild, styles.loginLayout]} />
        <View style={[styles.loginItem, styles.loginItemLayout]} />
        <View style={[styles.loginInner, styles.loginLayout]} />
        <View style={[styles.rectangleView, styles.loginItemLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login1Position: {
    left: 18,
    position: "absolute",
  },
  textTypo: {
    color: Color.gray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  componentLayout: {
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    height: 56,
    width: 358,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  loginLayout: {
    opacity: 0.25,
    transform: [
      {
        rotate: "-15.08deg",
      },
    ],
    height: 259,
    width: 333,
    borderRadius: Border.br_18xl,
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  loginItemLayout: {
    height: 228,
    width: 293,
    transform: [
      {
        rotate: "-15.08deg",
      },
    ],
    borderRadius: Border.br_18xl,
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  login1: {
    top: 230,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.black,
    textAlign: "left",
  },
  pleaseSignIn: {
    top: 278,
    left: 18,
    position: "absolute",
  },
  text: {
    width: 280,
  },
  mingcutedownFillIcon: {
    width: 22,
    height: 22,
    display: "none",
    marginLeft: 10,
    overflow: "hidden",
  },
  component3: {
    marginTop: 30,
  },
  component4Parent: {
    top: 329,
  },
  login2: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.white,
    textAlign: "left",
  },
  loginWrapper: {
    top: 499,
    left: 204,
    width: 171,
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    backgroundColor: Color.mainTheme,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  loginChild: {
    top: -81,
    left: 189,
  },
  loginItem: {
    top: -92,
    left: 228,
  },
  loginInner: {
    top: 734,
    left: 42,
  },
  rectangleView: {
    top: 767,
    left: 64,
  },
  login: {
    top: 0,
    left: 0,
    width: 393,
    overflow: "hidden",
    backgroundColor: Color.white,
    position: "absolute",
    height: 852,
  },
  loginParent: {
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default GroupScreen;
