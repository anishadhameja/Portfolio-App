import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function Skills() {
  const skillsMcIcons = [
    { lang: "Java", icon: "language-java", id: 1 },
    { lang: "Javascript", icon: "language-javascript", id: 2 },
    { lang: "Python", icon: "language-python", id: 3 },
    { lang: "Nodejs", icon: "nodejs", id: 4 },
    { lang: "C", icon: "copyright", id: 5 },
    { lang: "React JS", icon: "react", id: 6 },
    { lang: "React Native", icon: "react", id: 7 },
    { lang: "Html", icon: "language-html5", id: 8 },
    { lang: "Css", icon: "language-css3", id: 9 },
    { lang: "Github", icon: "github", id: 10 },
    { lang: "Django", img: "dj", id: 11 },
    { lang: "Problem Solving", icon: "code-json", id: 12 },
    { lang: "Data Structures", icon: "database", id: 13 },
  ];
  // express, django, c
  return (
    <View>
      <Text style={styles.textHead}>Skills</Text>
      <FlatList
        data={skillsMcIcons}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              {item.icon ? (
                <MaterialCommunityIcons
                  style={styles.icon}
                  name={item.icon}
                  size={30}
                  color="black"
                />
              ) : (
                <Image
                  source={require("../assets/dj.png")}
                  style={styles.img}
                />
              )}

              <Text style={styles.text}>{item.lang}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "purple",
    backgroundColor: "white",
    height: 50,
  },
  text: {
    marginLeft: 16,
    marginTop: 9,
    fontSize: 18,
  },
  // box: {
  //   backgroundColor: "#f5f5f5",
  // },
  textHead: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 170,
  },
  // container: {
  //   flex: 1,
  //   // flexDirection: "row",
  // },
  // textLang: {
  //   fontSize: 20,
  //   marginLeft: 50,
  //   marginTop: -10,
  //   // marginBottom: -4,
  // },
  icon: {
    // marginLeft: 0,
    marginTop: 6,
  },
  img: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: -3,
  },
});
