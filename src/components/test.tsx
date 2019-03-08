import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface iTestProp {
  message: string;
}

/**
 * todo: Functional Componentに書き換える
 */
export default class Test extends React.Component<iTestProp> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
