import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "react-native-ui-kitten";
import { Linking, AuthSession } from "expo";
import queryString from "querystring";

export const LoginScreen = () => {

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h4">
        Login
      </Text>
      <Button

      >
        Login
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    marginVertical: 64
  }
});
