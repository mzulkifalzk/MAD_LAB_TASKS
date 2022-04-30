import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4c4",
  },
});
