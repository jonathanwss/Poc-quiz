import React, { useState } from "react";
import { View, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, RadioButton, Title } from "react-native-paper";
import QuizAlternativeProps from "./types";

const QuizAlternative = ({
  title,
  type,
  onSelect,
  selected,
}: QuizAlternativeProps) => {
  const cardStyle = {
    backgroundColor: "#FFFFFF",
  };

  const handleSelect = () => {
    onSelect(title);
  };

  const getDynamicStyles = () => {
    if (type === "correct") {
      return styles.correct;
    } else if (type === "incorrect") {
      return styles.incorrect;
    } else {
      return null;
    }
  };

  const dynamicStyles = getDynamicStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelect}>
        <Card style={[cardStyle, dynamicStyles]}>
          <Card.Content style={styles.wrapperAlternative}>
            <RadioButton
              value={title}
              status={selected ? "checked" : "unchecked"}
              color="blue"
            />

            <Title style={styles.title}>{title}</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  wrapperAlternative: {
    flexDirection: "row",
    alignItems: "center",
  },
  default: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
  },
  correct: {
    borderColor: "green",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
  },
  incorrect: {
    backgroundColor: "#F7E5E5",
  },
  title: { fontSize: 14, fontFamily: "Montserrat", color: "#333333" },
});

export default QuizAlternative;
