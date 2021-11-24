import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Window from "./Window";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function WelcomeWindows({ navigation }) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Window title="Profile">
            <Ionicons name="person" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Education");
          }}
        >
          <Window title="Education">
            <Ionicons name="school" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Skills");
          }}
        >
          <Window title="Skills">
            <MaterialIcons name="computer" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Projects");
          }}
        >
          <Window title="Projects">
            <MaterialCommunityIcons name="github" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Work Experience");
          }}
        >
          <Window title="Work Experience">
            <FontAwesome name="building" size={80} color="purple" />
          </Window>
        </TouchableOpacity>
      </View>
    </View>
  );
}
