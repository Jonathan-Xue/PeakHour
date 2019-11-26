import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ColorPalette } from "../constants/colorPalette";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ExploreRestaurantButton = props => {
  const {
    restaurantImage,
    restaurantName,
    restaurantLocation,
    restaurantRating,
    restaurantOnPress
  } = props;

  return (
    <TouchableOpacity
      onPress={() => restaurantOnPress()}
      style={styles.container}
    >
      <Image resizeMode="cover" style={styles.image} source={restaurantImage} />
      <LinearGradient
        colors={["transparent", "#41414199", "#0E0E0E99"]}
        style={styles.gradient}
      ></LinearGradient>
      <View style={styles.restaurantDetailsContainer}>
        <View style={styles.restaurantDetails}>
          <Text style={styles.restaurantNameText}>{restaurantName}</Text>

          <View style={styles.textWithIconContainer}>
            <MaterialIcons
              name="location-on"
              size={16}
              color={ColorPalette.white}
            ></MaterialIcons>
            <Text style={styles.restaurantLocationText}>
              {restaurantLocation}
            </Text>
          </View>
        </View>

        <View style={styles.textWithIconContainer}>
          <Text style={styles.restaurantRatingText}>{restaurantRating}</Text>
          <MaterialIcons
            name="star"
            size={16}
            color={ColorPalette.orange}
          ></MaterialIcons>
        </View>
      </View>
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
