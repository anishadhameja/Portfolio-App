import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";

export const SLIIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIIDER_WIDTH * 0.7);
export default function CarouselItem({ item, index }) {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.header}>{item.id}</Text>
      <Text style={styles.body}>{item.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    backgroundColor: "white",
    elevation: 7,
    borderRadius: 8,
    paddingBottom: 40,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
    color: "black",
  },
});
