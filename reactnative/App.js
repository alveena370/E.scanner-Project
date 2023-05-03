// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/screens/LoginScreen.js";
import ForgotPassword from "./components/screens/forgetPassword.js";
import SignInScreen from "./components/screens/signScreen.js";
import WelcomeScreen from "./components/screens/WelcomeScreen.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={forgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
