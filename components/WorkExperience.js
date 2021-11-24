import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Window from "./Window";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function WorkExperience({ navigation }) {
  const data = [
    {
      title: "FavTutor",
      images: [{ img: require("../assets/FTCertificate.jpg") }],
      duration: "One and half Month, March 2021 - May 2021",
      description:
        "Completed different projects based on Java, Java Swings, JDBC, C languages. Also learned to make blogs. They also gave me an opportunity to work on sphere Engine where they gave me instructions on how to make a problem solving question.",
    },
    {
      title: "The Sparks Foundation",
      images: [{ img: require("../assets/sparksCertificate.jpg") }],
      duration: "One Month, May 2021 - June 2021",
      description:
        "The sparks foundation inspire students ,help them innovate and let them integrate to build the next generation humankind." +
        "I worked on project named Payment Gateway Integration.The frontend for this project is designed with the help of Html and Css." +
        "The payment integration used is Razorpay.",
      githubLink: "https://github.com/anishadhameja/bank-management-system",
    },
    {
      title: "Let's Grow More",
      images: [{ img: require("../assets/lgmCertificate.jpg") }],
      duration: "One Month, August 2021 - September 2021",
      description:
        "The company  help others to gain personal and professional skills in the area of Technological development." +
        "I worked on task which includes HTML,CSS & React Js. We were provided with task like building front end page and with the help of React " +
        "how to get data from API",
      githubLink: "https://github.com/anishadhameja/LGMVIP-Web-Development",
    },
  ];

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[0],
            });
          }}
        >
          <Window title="FavTutor">
            <Image
              source={require("../assets/FavTutor.jpg")}
              style={{ width: 70, height: 90, marginLeft: 4 }}
            />
          </Window>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[1],
            });
          }}
        >
          <Window title="The Sparks Foundation">
            <Image
              source={require("../assets/sparkslogo.png")}
              style={{ width: 90, height: 80, marginLeft: 4, marginTop: -4 }}
            />
          </Window>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[2],
            });
          }}
        >
          <Window title="Let's Grow More">
            <Image
              source={require("../assets/lgm.png")}
              style={{ width: 90, height: 90, marginLeft: -1 }}
            />
          </Window>
        </TouchableOpacity>
      </View>
    </View>
  );
}
