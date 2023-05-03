import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Keychain from "react-native-keychain";
import jwt from "jsonwebtoken";

const SignInScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid email format");
      return;
    }

    // Validate password format
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Invalid password format",
        "Password must have at least 8 characters and contain at least one number, one lowercase letter, and one uppercase letter"
      );
      return;
    }

    // Save password to keychain
    await Keychain.setInternetCredentials("myApp", email, password);

    // Generate JWT token
    const token = jwt.sign({ email }, "mySecretKey");

    // Save token to async storage
    await AsyncStorage.setItem("token", token);

    // Display confirmation message
    Alert.alert(`Welcome, ${fullName}!`);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Sign In</Text>
      <TextInput
        style={{ height: 40, width: "80%", borderWidth: 1, marginBottom: 16 }}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={{ height: 40, width: "80%", borderWidth: 1, marginBottom: 16 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{ height: 40, width: "80%", borderWidth: 1, marginBottom: 16 }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={{ fontSize: 18, color: "blue" }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignInScreen;
