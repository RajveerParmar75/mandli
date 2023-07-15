import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component5 from "../components/Component5";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const LoanTransactions = () => {
  const navigation = useNavigation();
  const [frameContainer35Visible, setFrameContainer35Visible] = useState(false);

  const openFrameContainer35 = useCallback(() => {
    setFrameContainer35Visible(true);
  }, []);

  const closeFrameContainer35 = useCallback(() => {
    setFrameContainer35Visible(false);
  }, []);

  return (
    <>
      <View style={styles.loanTransactions}>
        <View style={styles.loanTransactionsChild} />
        <Pressable
          style={[styles.vectorWrapper, styles.frameGroupPosition]}
          onPress={() => navigation.navigate("HomeLoan")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Text style={[styles.loanTransaction, styles.hareshBhaiTypo]}>
          Loan Transaction
        </Text>
        <View style={[styles.hareshBhaiParent, styles.frameWrapper1Border]}>
          <Text style={[styles.hareshBhai, styles.hareshBhaiTypo]}>
            Haresh Bhai
          </Text>
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
                  style={styles.vectorIcon1}
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
          <View style={[styles.frameWrapper1, styles.frameSpaceBlock]}>
            <View style={styles.amountParent}>
              <Text style={[styles.amount, styles.textTypo1]}>Amount</Text>
              <View style={styles.vectorGroup}>
                <Image
                  style={styles.vectorIcon2}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
                <Text style={[styles.text2, styles.text2Typo]}>120000</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.loanTransactionsItem, styles.hareshBhaiParentPosition]}
        />
        <Text style={[styles.transactions, styles.hareshBhaiTypo]}>
          Transactions
        </Text>
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <View style={[styles.parent, styles.frameSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo1]}>21-05-2019</Text>
            <View style={styles.frameParent1}>
              <View
                style={[
                  styles.transactionAmountParent,
                  styles.amountParentLayout,
                ]}
              >
                <Text style={[styles.transactionAmount, styles.textTypo1]}>
                  Transaction Amount
                </Text>
                <Text style={[styles.text4, styles.textTypo]}>1200</Text>
              </View>
              <View
                style={[styles.remainingAmountParent, styles.groupSpaceBlock]}
              >
                <Text style={[styles.transactionAmount, styles.textTypo1]}>
                  Remaining Amount
                </Text>
                <Text style={[styles.text5, styles.textTypo]}>1200</Text>
              </View>
            </View>
            <View style={styles.frameWrapper2}>
              <View style={styles.frameWrapper3}>
                <View style={styles.amountParent}>
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector3.png")}
                  />
                  <Text style={[styles.text2, styles.text2Typo]}>12000</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.group, styles.groupSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo1]}>21-05-2019</Text>
            <View style={styles.frameParent1}>
              <View
                style={[
                  styles.transactionAmountParent,
                  styles.amountParentLayout,
                ]}
              >
                <Text style={[styles.transactionAmount, styles.textTypo1]}>
                  Transaction Amount
                </Text>
                <Text style={[styles.text4, styles.textTypo]}>1200</Text>
              </View>
              <View
                style={[styles.remainingAmountParent, styles.groupSpaceBlock]}
              >
                <Text style={[styles.transactionAmount, styles.textTypo1]}>
                  Remaining Amount
                </Text>
                <Text style={[styles.text5, styles.textTypo]}>1200</Text>
              </View>
            </View>
            <View style={styles.frameWrapper2}>
              <View style={styles.frameWrapper3}>
                <View style={styles.amountParent}>
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector3.png")}
                  />
                  <Text style={[styles.text2, styles.text2Typo]}>12000</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.group, styles.groupSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo1]}>21-05-2019</Text>
            <View style={styles.frameParent1}>
              <View
                style={[
                  styles.transactionAmountParent,
                  styles.amountParentLayout,
                ]}
              >
                <Text style={[styles.transactionAmount, styles.textTypo1]}>
                  Transaction Amount
                </Text>
                <Text style={[styles.text4, styles.textTypo]}>1200</Text>
              </View>
              <View
                style={[styles.remainingAmountParent, styles.groupSpaceBlock]}
              >
                <Text style={[styles.transactionAmount, styles.textTypo1]}>
                  Remaining Amount
                </Text>
                <Text style={[styles.text5, styles.textTypo]}>1200</Text>
              </View>
            </View>
            <View style={styles.frameWrapper2}>
              <View style={styles.frameWrapper3}>
                <View style={styles.amountParent}>
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector3.png")}
                  />
                  <Text style={[styles.text2, styles.text2Typo]}>12000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.framePressable, styles.frameSpaceBlock]}
          onPress={openFrameContainer35}
        >
          <Image
            style={styles.vectorIcon6}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.addAmount, styles.text2Typo]}>Add Amount</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer35Visible}>
        <View style={styles.frameContainer35Overlay}>
          <Pressable
            style={styles.frameContainer35Bg}
            onPress={closeFrameContainer35}
          />
          <Component5 onClose={closeFrameContainer35} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameGroupPosition: {
    left: 18,
    position: "absolute",
  },
  hareshBhaiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameWrapper1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_3xs,
  },
  text2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  hareshBhaiParentPosition: {
    backgroundColor: Color.lightestGray,
    left: "50%",
    position: "absolute",
  },
  amountParentLayout: {
    width: 322,
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 91,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  groupSpaceBlock: {
    marginTop: 10,
    alignItems: "center",
  },
  loanTransactionsChild: {
    top: 0,
    left: 0,
    height: 80,
    width: 393,
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  vectorIcon: {
    height: 21,
    width: 22,
  },
  vectorWrapper: {
    top: 25,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 22,
  },
  loanTransaction: {
    marginLeft: -84.5,
    top: 32,
    fontSize: FontSize.size_3xl,
    color: Color.white,
    left: "50%",
    position: "absolute",
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
    color: Color.black,
  },
  icbaselineCallParent: {
    flexDirection: "row",
  },
  icbaselineCakeParent: {
    flexDirection: "row",
    marginTop: 20,
  },
  vectorIcon1: {
    width: 11,
    height: 13,
  },
  washingtonAveManchester: {
    marginLeft: 12,
    color: Color.black,
  },
  seeDocument: {
    textDecoration: "underline",
    color: Color.black,
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
  amount: {
    color: Color.black,
  },
  vectorIcon2: {
    width: 8,
    height: 12,
  },
  text2: {
    marginLeft: 1,
    color: Color.black,
  },
  vectorGroup: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  amountParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameWrapper1: {
    borderColor: "#101010",
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_mini,
    width: 325,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",
  },
  hareshBhaiParent: {
    marginLeft: -178.5,
    top: 103,
    borderColor: "#fff",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_xl,
    width: 357,
    backgroundColor: Color.lightestGray,
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    justifyContent: "center",
  },
  loanTransactionsItem: {
    marginLeft: -196.5,
    top: 509,
    height: 502,
    width: 393,
  },
  transactions: {
    top: 524,
    left: 17,
    fontSize: FontSize.size_xl,
    color: Color.black,
    position: "absolute",
  },
  text3: {
    color: Color.gray,
    width: 318,
  },
  transactionAmount: {
    width: 200,
    color: Color.black,
  },
  text4: {
    color: Color.forestgreen,
  },
  transactionAmountParent: {
    alignItems: "center",
  },
  text5: {
    color: Color.tomato,
  },
  remainingAmountParent: {
    width: 322,
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 15,
    alignItems: "center",
  },
  frameWrapper3: {
    width: 273,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameWrapper2: {
    width: 321,
    alignItems: "flex-end",
    marginTop: 15,
  },
  parent: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_mini,
    width: 357,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  group: {
    paddingVertical: Padding.p_mini,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_7xl,
    width: 357,
    backgroundColor: Color.white,
  },
  frameGroup: {
    top: 557,
  },
  frameContainer35Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer35Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon6: {
    width: 18,
    height: 18,
  },
  addAmount: {
    marginLeft: 15,
    color: Color.white,
  },
  framePressable: {
    marginLeft: -162.5,
    top: 435,
    height: 49,
    paddingHorizontal: Padding.p_26xl,
    width: 325,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.mainTheme,
  },
  loanTransactions: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default LoanTransactions;
