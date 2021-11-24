import React, { Component, useState } from "react";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Linking } from "react-native";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Project({ route, navigation }) {
  const [active, setActive] = useState(null);

  const { project } = route.params;
  const images = project.images;

  function callUrl() {
    Linking.canOpenURL(project.githubLink).then((supported) => {
      if (supported) {
        Linking.openURL(project.githubLink);
      } else {
        console.log("Don't know how to open URI: " + project.githubLink);
      }
    });
  }

  function change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== active) {
        setActive(slide);
      }
    }
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Card containerStyle={{ backgroundColor: "#d2f6f3" }}>
        <Card.Title>
          <Text
            style={{
              fontSize: 20,
              fontStyle: "italic",
              fontFamily: "nunito-bold",
            }}
          >
            {project.title}
          </Text>
        </Card.Title>
        <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
            <ScrollView
              onScroll={({ nativeEvent }) => change(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}
            >
              {images.map((e, index) => (
                <Image
                  key={index}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={e.img}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.length > 1 &&
                images.map((e, index) => (
                  <Text
                    key={index}
                    style={active === index ? styles.dotActive : styles.dot}
                  >
                    ●
                  </Text>
                ))}
            </View>
          </View>
        </SafeAreaView>

        {project.languages && <Card.Divider style={{ marginTop: 20 }} />}
        {project.languages && (
          <Text style={{ marginTop: 5, fontSize: 20 }}>
            <Text style={{ fontWeight: "bold", fontFamily: "nunito-bold" }}>
              LANGUAGES:
            </Text>
          </Text>
        )}
        {project.languages && (
          <Text>
            <Text style={{ fontWeight: "bold" }}>Front End:</Text>
            <Text> {project.languages.frontend} </Text>
          </Text>
        )}
        {project.languages && (
          <Text>
            <Text style={{ fontWeight: "bold" }}>Back End:</Text>
            <Text> {project.languages.backend} </Text>
          </Text>
        )}
        {project.duration && <Card.Divider style={{ marginTop: 20 }} />}
        {project.duration && (
          <Text style={{ marginTop: 5, fontSize: 20 }}>
            <Text style={{ fontWeight: "bold" }}>DURATION:</Text>
          </Text>
        )}
        {project.duration && <Text>{project.duration}</Text>}
        {project.description && <Card.Divider style={{ marginTop: 20 }} />}
        {project.description && (
          <Text style={{ marginTop: 5, fontSize: 20 }}>
            <Text style={{ fontWeight: "bold" }}>DESCRIPTION:</Text>
          </Text>
        )}
        {project.description && <Text>{project.description}</Text>}
        {project.githubLink && <Card.Divider style={{ marginTop: 20 }} />}
        {project.githubLink && (
          <View style={styles.github}>
            <Entypo name="github-with-circle" size={24} color="#6e5494" />
            <TouchableOpacity onPress={callUrl}>
              <Text style={{ color: "#6e5494", fontSize: 15 }}>
                {project.githubLink}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Card>
      {/* <TouchableOpacity
        style={{ ...styles.touch, marginTop: 80, marginLeft: 100 }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Github repository</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    marginTop: 50,
    backgroundColor: "crimson",
    borderRadius: 10,
    padding: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 160,
  },
  container: {
    marginTop: 30,

    // flex: 1
  },
  wrap: {
    width: Dimensions.get("window").width * 0.85,
    height: Dimensions.get("window").height * 0.25, // 25% window
    // height: 280,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
});
