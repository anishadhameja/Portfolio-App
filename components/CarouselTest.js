import React, { useRef } from "react";
import { View, Text, SafeAreaView, Dimensions, Image } from "react-native";
// import { Carousel } from "react-native-snap-carousel";
import Carousel from "react-native-snap-carousel";

const SLIIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIIDER_WIDTH * 0.7);

export default function CarouselTest() {
  const isCarousel = useRef(null);
  const data = [
    {
      id: "1",
      name: "Привет",
    },
    {
      id: "2",
      name: "Привет",
    },
  ];
  return (
    <SafeAreaView>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={({ item }) => (
          <View style={{ width: ITEM_WIDTH, height: 200 }}>
            <Image
              source={require("../assets/ds.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
