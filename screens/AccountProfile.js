import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const AccountProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountProfile}>
      <View style={styles.accountProfileChild} />
      <View style={styles.accountProfileItem} />
      <View style={[styles.profileWrapper, styles.wrapperPosition]}>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      </View>
      <View style={[styles.hareshBhaiParent, styles.parentBorder]}>
        <Text style={[styles.hareshBhai, styles.profileTypo]}>Haresh Bhai</Text>
        <View style={styles.frameParent}>
          <View style={styles.icbaselineCallParent}>
            <Image
              style={styles.icbaselineCallIcon}
              contentFit="cover"
              source={require("../assets/icbaselinecall.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>9099039488</Text>
          </View>
          <View style={styles.icbaselineCakeParent}>
            <Image
              style={styles.icbaselineCallIcon}
              contentFit="cover"
              source={require("../assets/icbaselinecake.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>24-12-2002</Text>
          </View>
          <View style={styles.icbaselineCakeParent}>
            <View style={styles.icbaselineCallParent}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text
                style={[styles.washingtonAveManchester, styles.textTypo1]}
              >{`4517 Washington Ave. Manchester,
Kentucky 39495`}</Text>
            </View>
          </View>
          <View style={styles.icbaselineCakeParent}>
            <View style={styles.icbaselineCallParent}>
              <View style={styles.seeDocumentWrapper}>
                <Text style={[styles.seeDocument, styles.textTypo1]}>
                  See Document
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper1}>
          <View style={styles.amountParent}>
            <Text style={styles.textTypo1}>Amount</Text>
            <View style={styles.vectorGroup}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>120000</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.transactions, styles.profileTypo]}>
        Transactions
      </Text>
      <Pressable
        style={[styles.vectorWrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("HomeSaving")}
      >
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.frameGroup, styles.frameGroupLayout]}>
        <Pressable
          style={styles.framePressableLayout}
          onPress={() => navigation.navigate("Saving")}
        >
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={[styles.saving, styles.loan1Typo]}>Saving</Text>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.framePressableLayout]}
          onPress={() => navigation.navigate("Loan")}
        >
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
          <Text style={[styles.saving, styles.loan1Typo]}>Loan</Text>
        </Pressable>
      </View>
      <View style={[styles.frameParent1, styles.parentBorder]}>
        <Pressable
          style={[styles.savingWrapper, styles.wrapperFlexBox]}
          onPress={() => navigation.navigate("HomeSaving")}
        >
          <Text style={[styles.saving1, styles.textTypo]}>Saving</Text>
        </Pressable>
        <View style={[styles.loanWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.loan1Typo}>Loan</Text>
        </View>
      </View>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={styles.textTypo1}>21-05-2019</Text>
        <Text style={[styles.text4, styles.textTypo]}>+500</Text>
      </View>
      <View style={[styles.group, styles.parentFlexBox]}>
        <Text style={styles.textTypo1}>21-05-2019</Text>
        <Text style={[styles.text4, styles.textTypo]}>+500</Text>
      </View>
      <View style={[styles.container, styles.parentFlexBox]}>
        <Text style={styles.textTypo1}>21-05-2019</Text>
        <Text style={[styles.text4, styles.textTypo]}>+500</Text>
      </View>
      <View style={[styles.parent1, styles.parentFlexBox]}>
        <Text style={styles.textTypo1}>21-05-2019</Text>
        <Text style={[styles.text4, styles.textTypo]}>+500</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    height: 40,
    top: 25,
    justifyContent: "center",
    alignItems: "center",
    left: 18,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  parentBorder: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    justifyContent: "center",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameGroupLayout: {
    borderRadius: Border.br_3xs,
    width: 357,
    backgroundColor: Color.lightestGray,
  },
  loan1Typo: {
    color: Color.mainTheme,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  framePressableLayout: {
    paddingHorizontal: Padding.p_26xl,
    height: 49,
    width: 158,
    borderColor: "#6e78d4",
    paddingVertical: Padding.p_mini,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    height: 46,
    borderBottomWidth: 2,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_7xl,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    left: 18,
    position: "absolute",
  },
  accountProfileChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.mainTheme,
    height: 80,
    width: 393,
    position: "absolute",
  },
  accountProfileItem: {
    marginLeft: -196.5,
    top: 539,
    height: 322,
    backgroundColor: Color.lightestGray,
    left: "50%",
    width: 393,
    position: "absolute",
  },
  profile: {
    fontSize: FontSize.size_3xl,
    color: Color.white,
  },
  profileWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 357,
    height: 40,
    top: 25,
  },
  hareshBhai: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
  },
  icbaselineCallIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    marginLeft: 7,
  },
  icbaselineCallParent: {
    flexDirection: "row",
  },
  icbaselineCakeParent: {
    marginTop: 20,
    flexDirection: "row",
  },
  vectorIcon: {
    width: 11,
    height: 13,
  },
  washingtonAveManchester: {
    marginLeft: 12,
  },
  seeDocument: {
    textDecoration: "underline",
  },
  seeDocumentWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 20,
    justifyContent: "center",
  },
  vectorIcon1: {
    width: 8,
    height: 12,
  },
  text2: {
    marginLeft: 1,
    color: Color.black,
  },
  vectorGroup: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  amountParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper1: {
    borderColor: "#101010",
    width: 325,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_7xl,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  hareshBhaiParent: {
    marginLeft: -178.5,
    top: 103,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xl,
    borderRadius: Border.br_3xs,
    width: 357,
    backgroundColor: Color.lightestGray,
    left: "50%",
    borderColor: "#fff",
    borderStyle: "solid",
  },
  transactions: {
    top: 554,
    left: 17,
    fontSize: FontSize.size_xl,
    color: Color.black,
    position: "absolute",
  },
  vectorIcon2: {
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
  vectorIcon3: {
    width: 18,
    height: 18,
  },
  saving: {
    marginLeft: 15,
  },
  framePressable: {
    marginLeft: 14,
  },
  frameGroup: {
    top: 435,
    height: 79,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 18,
    position: "absolute",
  },
  saving1: {
    color: Color.gray,
  },
  savingWrapper: {
    width: 182,
    borderColor: "#d9d9d9",
    height: 46,
    borderBottomWidth: 2,
  },
  loanWrapper: {
    width: 175,
    height: 46,
    borderBottomWidth: 2,
    borderColor: "#6e78d4",
  },
  frameParent1: {
    top: 582,
    alignItems: "center",
    flexDirection: "row",
    left: 18,
  },
  text4: {
    color: Color.forestgreen,
  },
  parent: {
    top: 632,
  },
  group: {
    top: 681,
  },
  container: {
    top: 730,
  },
  parent1: {
    top: 779,
  },
  accountProfile: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AccountProfile;
