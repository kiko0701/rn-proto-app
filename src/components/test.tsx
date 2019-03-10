import React, { FunctionComponent, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface iTestProp {
  message: string;
}

export const Test: FunctionComponent<iTestProp> = props => {
  return (
    <View style={styles.container}>
      <Text>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
