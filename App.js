import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
// import CarouselTest from "./components/CarouselTest";
import Window from "./components/Window";
import WelcomeWindows from "./components/WelcomeWindows";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectWindows from "./components/ProjectWindows";
import WorkExperience from "./components/WorkExperience";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

const MyTheme = {
  colors: {
    background: "#fff2f5",
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#800080",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "nunito-bold",
              },
            }}
          >
            <Stack.Screen name="Welcome!" component={WelcomeWindows} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Education" component={Education} />
            <Stack.Screen name="Skills" component={Skills} />
            <Stack.Screen name="Details" component={Project} />
            <Stack.Screen name="Projects" component={ProjectWindows} />
            <Stack.Screen name="Work Experience" component={WorkExperience} />
            {/* <Stack.Screen name="Proj" component={Project} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33cc99",
    fontFamily: "nunito-regular",
  },
});
