import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
