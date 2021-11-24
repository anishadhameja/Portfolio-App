import React from "react";
import { View, Text } from "react-native";
import MyCard from "./MyCard";

export default function Education() {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 50,
          marginLeft: 50,
          fontFamily: "nunito-bold",
          //   borderBottomColor: "black",
          //   borderBottomWidth: 1,
        }}
      >
        ─── Education Details ───
      </Text>
      <View style={{ marginTop: 10, fontFamily: "nunito-bold" }}>
        <MyCard
          title="SSC"
          percentage="87%"
          name="Fatima High School"
          stream=""
          cgpa=""
          city="Ambarnath"
        />
        <MyCard
          title="HSC"
          percentage="83.08%"
          name="Chandibai Himatthmal Mansukhani(CHM) College"
          stream="Science"
          cgpa=""
          city="Ulhasnagar"
        />
        <MyCard
          title="B.Tech"
          cgpa="10"
          name="Vivekanand Education Society Of Information And Technology"
          stream="Computer Engineering"
          percentage=""
          city="Kurla"
        />
      </View>
    </View>
  );
}
