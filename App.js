import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TextInput,
} from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function App() {
  let [name, setName] = useState("");
  const html = `
    <html>
      <body>
        <h1> Hi ${name} <h1/>
        <p style="color: red;">Hello Aref Salehi <p/>
      </body>
    </html>
  `;
  const generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });
    await shareAsync(file.uri);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          onChangeText={(value) => setName(value)}
          value={name}
          placeholder="Name"
          style={styles.input}
        />
        <Button title="Generate PDF" onPress={generatePdf} />
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
  input: {
    width: 290,
    height: 45,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
});
