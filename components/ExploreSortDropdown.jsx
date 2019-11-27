import React from "react";
import { View, Image, StyleSheet, Text, Picker } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ColorPalette } from "../constants/colorPalette";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ExploreSortDropdown = props => {
  return (
    <TouchableOpacity
      onPress={() => restaurantOnPress()}
      style={styles.container}
    >
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 170,
    backgroundColor: ColorPalette.orange,
    borderRadius: 10
  },
  fill: { width: "100%", height: "100%", borderRadius: 10 },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  },
  restaurantDetailsContainer: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  restaurantNameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: ColorPalette.white
  },
  restaurantLocationText: {
    fontSize: 14,
    color: ColorPalette.white
  },
  restaurantRatingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: ColorPalette.orange
  },
  textWithIconContainer: { flexDirection: "row", alignItems: "center" }
});
