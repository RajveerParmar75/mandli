import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeLoan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeLoan}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <Pressable
          style={styles.wrapperLayout}
          onPress={() => navigation.navigate("HomeSaving")}
        >
          <Text style={[styles.saving, styles.textClr]}>Saving</Text>
        </Pressable>
        <View style={[styles.loanWrapper, styles.wrapperLayout]}>
          <Text style={[styles.loan, styles.loanTypo]}>Loan</Text>
        </View>
      </View>
      <Pressable
        style={[styles.frameGroup, styles.frameParentBorder]}
        onPress={() => navigation.navigate("LoanTransactions")}
      >
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textClr]}>12345677</Text>
          <Text style={[styles.hareshBhai, styles.text1Clr]}>Haresh Bhai</Text>
        </View>
        <View style={styles.frameSpaceBlock}>
          <View>
            <Text style={[styles.startDate, styles.textClr]}>Start Date</Text>
            <Text style={[styles.text1, styles.text1Clr]}>21-05-2019</Text>
          </View>
          <View style={styles.endDateParent}>
            <Text style={[styles.startDate, styles.textClr]}>End Date</Text>
            <Text style={[styles.text1, styles.text1Clr]}>21-05-2023</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={[styles.loanParent, styles.frameParentFlexBox]}>
            <Text style={[styles.loan1, styles.text1Clr]}>Loan</Text>
            <View style={[styles.vectorParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>120000</Text>
            </View>
          </View>
          <View style={[styles.remainingParent, styles.frameParentFlexBox]}>
            <Text style={[styles.loan1, styles.text1Clr]}>Remaining</Text>
            <View style={[styles.vectorParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>12000</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={[styles.frameParent1, styles.frameParentBorder]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textClr]}>12345677</Text>
          <Text style={[styles.hareshBhai, styles.text1Clr]}>Haresh Bhai</Text>
        </View>
        <View style={styles.frameSpaceBlock}>
          <View>
            <Text style={[styles.startDate, styles.textClr]}>Start Date</Text>
            <Text style={[styles.text1, styles.text1Clr]}>21-05-2019</Text>
          </View>
          <View style={styles.endDateParent}>
            <Text style={[styles.startDate, styles.textClr]}>End Date</Text>
            <Text style={[styles.text1, styles.text1Clr]}>21-05-2023</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={[styles.loanParent, styles.frameParentFlexBox]}>
            <Text style={[styles.loan1, styles.text1Clr]}>Loan</Text>
            <View style={[styles.vectorParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>120000</Text>
            </View>
          </View>
          <View style={[styles.remainingParent, styles.frameParentFlexBox]}>
            <Text style={[styles.loan1, styles.text1Clr]}>Remaining</Text>
            <View style={[styles.vectorParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>12000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent4, styles.frameParentBorder]}>
        <View style={styles.parent}>
          <Text style={[styles.text, styles.textClr]}>12345677</Text>
          <Text style={[styles.hareshBhai, styles.text1Clr]}>Haresh Bhai</Text>
        </View>
        <View style={styles.frameSpaceBlock}>
          <View>
            <Text style={[styles.startDate, styles.textClr]}>Start Date</Text>
            <Text style={[styles.text1, styles.text1Clr]}>21-05-2019</Text>
          </View>
          <View style={styles.endDateParent}>
            <Text style={[styles.startDate, styles.textClr]}>End Date</Text>
            <Text style={[styles.text1, styles.text1Clr]}>21-05-2023</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={[styles.loanParent, styles.frameParentFlexBox]}>
            <Text style={[styles.loan1, styles.text1Clr]}>Loan</Text>
            <View style={[styles.vectorParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.text3, styles.textTypo]}>120000</Text>
            </View>
          </View>
          <View style={[styles.remainingParent, styles.frameParentFlexBox]}>
            <Text style={[styles.loan1, styles.text1Clr]}>Remaining</Text>
            <View style={[styles.vectorParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>12000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.vectorParent4}>
          <Image
            style={styles.vectorIcon6}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.search, styles.textClr]}>Search..</Text>
        </View>
      </View>
      <Text style={[styles.transaction, styles.textClr]}>Transaction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textClr: {
    color: Color.gray,
    textAlign: "left",
  },
  wrapperLayout: {
    padding: Padding.p_3xs,
    height: 45,
    width: 171,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
  },
  loanTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameParentBorder: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_6xl,
    left: "50%",
    marginLeft: -178.5,
    width: 357,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.lightestGray,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text1Clr: {
    color: Color.black,
    textAlign: "left",
  },
  frameSpaceBlock: {
    marginTop: 20,
    width: 325,
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 1,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  groupChildLayout: {
    width: 357,
    height: 45,
    position: "absolute",
  },
  saving: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  loan: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  loanWrapper: {
    backgroundColor: Color.mainTheme,
    marginLeft: 15,
  },
  frameParent: {
    top: 35,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.lightestGray,
    borderRadius: Border.br_3xs,
    left: 18,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  hareshBhai: {
    fontSize: FontSize.size_lg,
    marginTop: 7,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  parent: {
    width: 325,
  },
  startDate: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  text1: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    marginTop: 5,
    fontSize: FontSize.size_sm,
  },
  endDateParent: {
    marginLeft: 35,
  },
  loan1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    width: 8,
    height: 12,
  },
  text3: {
    color: Color.mainTheme,
  },
  vectorParent: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  loanParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text4: {
    color: Color.tomato,
  },
  remainingParent: {
    marginLeft: 35,
    flexDirection: "row",
    justifyContent: "center",
  },
  frameView: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    marginTop: 20,
    backgroundColor: Color.white,
  },
  frameGroup: {
    top: 191,
  },
  frameParent1: {
    top: 414,
  },
  frameParent4: {
    top: 637,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.lightestGray,
    width: 357,
    borderRadius: Border.br_3xs,
  },
  vectorIcon6: {
    width: 14,
    height: 14,
  },
  search: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    marginLeft: 15,
    textAlign: "left",
  },
  vectorParent4: {
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
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 18,
    position: "absolute",
    color: Color.gray,
  },
  homeLoan: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default HomeLoan;
