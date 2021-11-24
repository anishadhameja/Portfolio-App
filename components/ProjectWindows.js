import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Window from "./Window";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function ProjectWindows({ navigation }) {
  const data = [
    {
      title: "Bank Management System",
      images: [
        { img: require("../assets/bank1.1.jpg") },
        { img: require("../assets/bank1.2.jpg") },
        { img: require("../assets/bank1.3.jpg") },
        { img: require("../assets/bank1.4.jpg") },
        { img: require("../assets/bank1.5.jpg") },
        { img: require("../assets/bank1.6.jpg") },
      ],
      languages: {
        frontend: "Express",
        backend: "NodeJS and MySQL",
      },
      description:
        "This is a bank management system. It is a web application that allow users to manage their bank accounts. It is a web application that allows users to manage their bank accounts.",
      githubLink: "https://github.com/anishadhameja/bank-management-system",
    },
    {
      title: "Amazon Clone",
      images: [
        { img: require("../assets/1.jpg") },
        { img: require("../assets/2.jpg") },
        { img: require("../assets/3.jpg") },
        { img: require("../assets/4.jpg") },
        { img: require("../assets/6.jpg") },
        { img: require("../assets/7.jpg") },
        { img: require("../assets/8.jpg") },
        { img: require("../assets/9.jpg") },
      ],
      languages: {
        frontend: "React Js",
        backend: "Django, SqLite",
      },
      description:
        "The frontend is designed with the help of Html,Css,ReactJs.The backend is designed with the help of Django,Django rest api,The database used is Dbsqlite3 and postgresSql." +
        "My contribution to the project was designing in frontend." +
        "The website is hosted on heroku.",
      githubLink: "https://github.com/KaranRohra/amazon-clone-frontend",
    },
    {
      title: "Chat App",
      images: [
        { img: require("../assets/chat1.jpg") },
        { img: require("../assets/chat2.jpg") },
        { img: require("../assets/chat3.jpg") },
        { img: require("../assets/chat4.jpg") },
      ],
      languages: {
        frontend: "Express",
        backend: "NodeJS and Socket IO",
      },
      description:
        "This is a chat app. It is a web application that allow users to chat with each other. The users have to join a particular room using room ID.",
    },
    {
      title: "Mini Blog",
      images: [
        { img: require("../assets/minblog1.jpg") },
        { img: require("../assets/minblog2.jpg") },
        { img: require("../assets/minblog3.jpg") },
        { img: require("../assets/minblog4.jpg") },
        { img: require("../assets/minblog5.jpg") },
        { img: require("../assets/minblog6.jpg") },
        { img: require("../assets/miniblog7.jpg") },
      ],
      languages: {
        frontend: "Html, Css",
        backend: "Django",
      },
      description:
        "This is a mini blog which helps user to write their blog and share with others. The user can edit, delete,create blog",
      githubLink: "https://github.com/anishadhameja/Mini-Blog-Django",
    },
    {
      title: "Keep Notes",
      images: [
        { img: require("../assets/keepnotes1.jpg") },
        { img: require("../assets/keepnotes2.jpg") },
        { img: require("../assets/keepnotes3.jpg") },
        { img: require("../assets/keepnotes4.jpg") },
        { img: require("../assets/keepnotes5.jpg") },
        { img: require("../assets/keepnotes6.jpg") },
        { img: require("../assets/keepnotes7.jpg") },
      ],
      languages: {
        frontend: "HTML, CSS, Express",
        backend: "Node.js, MySQL",
      },
      description:
        "This website helps user to keep notes and keep track of their daily activities." +
        "This project helps user to keep their notes privately and secured ." +
        "The front end is designed with the help of Html,Css,JavaScript,Express." +
        "The backend is designed with the help of NodeJs,MySql",

      githubLink: "https://github.com/anishadhameja/keepnotes",
    },
    {
      title: "Lazer Tank Game",
      images: [
        { img: require("../assets/keepnotes1.jpg") },
        { img: require("../assets/keepnotes2.jpg") },
        { img: require("../assets/keepnotes3.jpg") },
        { img: require("../assets/keepnotes4.jpg") },
        { img: require("../assets/keepnotes5.jpg") },
        { img: require("../assets/keepnotes6.jpg") },
        { img: require("../assets/keepnotes7.jpg") },
      ],
      languages: {
        frontEnd: "C",
      },
      description:
        "This is a game which helps user to play the game of laser tank.",
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
          <Window title="Banking System">
            <FontAwesome name="bank" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[1],
            });
          }}
        >
          <Window title="Amazon Clone">
            <FontAwesome name="amazon" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[4],
            });
          }}
        >
          <Window title="Keep Notes">
            <MaterialCommunityIcons
              name="google-keep"
              size={80}
              color="purple"
            />
          </Window>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[2],
            });
          }}
        >
          <Window title="Chat App">
            <Entypo name="chat" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[5],
            });
          }}
        >
          <Window title="Lazer Tank Game">
            <MaterialCommunityIcons name="tank" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              project: data[3],
            });
          }}
        >
          <Window title="Mini Blog">
            <Entypo name="keyboard" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
      </View>
    </View>
  );
}
