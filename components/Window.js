import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Window(props) {
  return (
    <View style={styles.square}>
      <View style={{ marginTop: 10, marginLeft: 30 }}>{props.children}</View>

      <Text
        style={{
          marginTop: 6,
          fontWeight: "bold",
          color: "purple",
          marginLeft: 35,
          fontSize: 15,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 18,
    marginTop: 60,
    marginLeft: 30,
    borderWidth: 3,
    borderColor: "#ffc0cb",
  },
});
