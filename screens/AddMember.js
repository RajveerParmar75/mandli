import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AddMember = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addMember}>
      <View style={styles.addMemberChild} />
      <Pressable
        style={[styles.saveWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.navigate("HomeSaving")}
      >
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <View style={[styles.uploadDocumentWrapper, styles.frameParentPosition]}>
        <Text style={[styles.uploadDocument, styles.saveTypo]}>
          Upload Document
        </Text>
      </View>
      <View style={[styles.component4, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Name</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component5, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Address</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component6, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Birth Date</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component7, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Contact Number</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.component8, styles.componentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>Interest Rate</Text>
        <Image
          style={styles.mingcutedownFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutedownfill.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <Pressable
          style={[styles.vectorWrapper, styles.frameParentLayout]}
          onPress={() => navigation.navigate("HomeSaving")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Text style={[styles.newMember, styles.saveTypo]}>New Member</Text>
      </View>
      <Text style={[styles.personInformation, styles.textTypo]}>
        Person information
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_26xl,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  saveTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameParentPosition: {
    width: 357,
    left: 18,
    flexDirection: "row",
    position: "absolute",
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
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo: {
    color: Color.gray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameParentLayout: {
    height: 40,
    alignItems: "center",
  },
  addMemberChild: {
    top: 0,
    left: 0,
    width: 393,
    height: 80,
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  save: {
    fontSize: FontSize.size_base,
  },
  saveWrapper: {
    top: 743,
    left: 111,
    width: 171,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_26xl,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.mainTheme,
    position: "absolute",
  },
  uploadDocument: {
    fontSize: FontSize.size_xs,
  },
  uploadDocumentWrapper: {
    top: 536,
    backgroundColor: Color.gray,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_26xl,
    borderRadius: Border.br_3xs,
    width: 357,
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
  component4: {
    top: 136,
  },
  component5: {
    top: 216,
  },
  component6: {
    top: 296,
  },
  component7: {
    top: 376,
  },
  component8: {
    top: 456,
  },
  vectorIcon: {
    height: 21,
    width: 22,
  },
  vectorWrapper: {
    width: 22,
    justifyContent: "center",
  },
  newMember: {
    fontSize: FontSize.size_3xl,
    marginLeft: 88,
  },
  frameParent: {
    top: 25,
    width: 357,
    left: 18,
    flexDirection: "row",
    position: "absolute",
  },
  personInformation: {
    top: 100,
    left: 18,
    color: Color.gray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  addMember: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default AddMember;
