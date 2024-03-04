import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

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
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
