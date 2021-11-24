import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Linking } from "react-native";

export default function Home() {
  function callUrl() {
    Linking.canOpenURL("https://github.com/anishadhameja").then((supported) => {
      if (supported) {
        Linking.openURL("https://github.com/anishadhameja");
      } else {
        console.log(
          "Don't know how to open URI: " + "https://github.com/anishadhameja"
        );
      }
    });
  }
  return (
    <View>
      <Text style={styles.text}>My Portfolio</Text>
      <Image style={styles.image} source={require("../assets/ani.jpg")} />
      <Text style={styles.text}>Anisha Dhameja</Text>
      <MyTextInput icon="mail" />
      <Entypo
        name="github-with-circle"
        size={24}
        color="black"
        style={styles.git}
      />
      <TouchableOpacity style={styles.gittext} onPress={callUrl}>
        <Text style={{ color: "purple" }}>
          Click here to visit github profile!
        </Text>
      </TouchableOpacity>

      {/* <Button style={styles.button} title="Github" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    marginTop: 50,
    backgroundColor: "crimson",
    borderRadius: 10,
    padding: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 160,
  },
  gittext: {
    fontFamily: "nunito-bold",
    width: 300,
    fontWeight: "bold",
    marginTop: -25,
    marginLeft: 110,
  },
  git: {
    marginTop: 40,
    marginLeft: 80,
  },
  image: {
    width: 300,
    height: 350,
    marginLeft: 50,
    marginTop: 45,
    borderRadius: 170,
  },
  text: {
    fontFamily: "nunito-bold",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 110,
    marginTop: 60,
  },
  textInput: {
    marginTop: 32,
    paddingLeft: 55,
    paddingRight: 55,
    color: "black",
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    width: 280,
    marginLeft: 70,
  },
  lefticon: {
    marginLeft: 80,
    marginTop: 38,
    position: "absolute",
    zIndex: 1,
  },
});

const MyTextInput = ({ icon }) => {
  return (
    <View>
      <Octicons name={icon} size={30} style={styles.lefticon} />
      <TextInput
        style={styles.textInput}
        editable={false}
        value="ani.dhameja@gmail.com"
      />
    </View>
  );
};
