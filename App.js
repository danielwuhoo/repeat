import React from "react";
import { light as lightTheme, mapping } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </ApplicationProvider>
  );
};

export default App;
