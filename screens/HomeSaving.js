import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeSaving = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeSaving}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.savingWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.saving}>Saving</Text>
        </View>
        <Pressable
          style={[styles.loanWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("HomeLoan")}
        >
          <Text style={styles.loan}>Loan</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.frameGroup, styles.frameBorder]}
        onPress={() => navigation.navigate("AccountProfile")}
      >
        <View>
          <Text style={styles.textTypo}>12345677</Text>
          <Text style={[styles.hareshBhai, styles.text1Typo]}>Haresh Bhai</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>1200</Text>
        </View>
      </Pressable>
      <View style={[styles.frameContainer, styles.frameBorder]}>
        <View>
          <Text style={styles.textTypo}>12345677</Text>
          <Text style={[styles.hareshBhai, styles.text1Typo]}>Haresh Bhai</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>1200</Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameBorder]}>
        <View>
          <Text style={styles.textTypo}>12345677</Text>
          <Text style={[styles.hareshBhai, styles.text1Typo]}>Haresh Bhai</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>1200</Text>
        </View>
      </View>
      <Pressable
        style={[styles.vectorWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.navigate("AddMember")}
      >
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.vectorParent1}>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.search, styles.textTypo]}>Search..</Text>
        </View>
      </View>
      <Text style={[styles.transaction, styles.textTypo]}>Transaction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameBorder: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_6xl,
    width: 357,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.lightestGray,
    borderRadius: Border.br_3xs,
    left: 18,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  groupChildLayout: {
    width: 357,
    height: 45,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.gray,
    textAlign: "left",
  },
  saving: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  savingWrapper: {
    height: 45,
    width: 171,
    padding: Padding.p_3xs,
    backgroundColor: Color.mainTheme,
    borderRadius: Border.br_3xs,
  },
  loan: {
    color: Color.gray,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  loanWrapper: {
    marginLeft: 15,
    height: 45,
    width: 171,
    padding: Padding.p_3xs,
  },
  frameParent: {
    top: 35,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor: Color.lightestGray,
    borderRadius: Border.br_3xs,
    left: 18,
    position: "absolute",
  },
  hareshBhai: {
    fontSize: FontSize.size_lg,
    marginTop: 7,
  },
  vectorIcon: {
    width: 8,
    height: 12,
  },
  text1: {
    marginLeft: 7,
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  frameGroup: {
    top: 191,
  },
  frameContainer: {
    top: 280,
  },
  frameView: {
    top: 369,
  },
  vectorIcon3: {
    width: 30,
    height: 30,
  },
  vectorWrapper: {
    marginLeft: 101.5,
    top: 757,
    left: "50%",
    width: 60,
    height: 50,
    backgroundColor: Color.mainTheme,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.lightestGray,
    borderRadius: Border.br_3xs,
    width: 357,
  },
  vectorIcon4: {
    width: 14,
    height: 14,
  },
  search: {
    marginLeft: 15,
  },
  vectorParent1: {
    top: 14,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    top: 100,
    left: 18,
  },
  transaction: {
    top: 170,
    left: 18,
    position: "absolute",
  },
  homeSaving: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default HomeSaving;
