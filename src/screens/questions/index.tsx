import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import {
  Title,
  Space,
  SubTitle,
} from "../../components";
import QuizImage from "../../components/quizImage";
import QuizAlternative from "../../components/quizAlternative";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
});

const Questions = ({ route }) => {
  const [quiz] = useState(route.params.quiz);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { title: "Football", type: "correct" },
    { title: "Basketball", type: "default" },
    { title: "VolleyBall", type: "incorrect" },
    { title: "Shuttlecock", type: "default" },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={quiz.completition} color={quiz.iconColor} />
      <Space />
      <SubTitle text={`Completed ${quiz.completition * 100}%`} />
      <Space />
      <Title
        fontWeight="bold"
        text={"The image below is a field image used for?"}
      />
      <Space />
      <QuizImage />
      <View>
        <Space />
        {options.map((item) => (
          <>
            <QuizAlternative
              title={item.title}
              selected={selectedOption === item.title}
              onSelect={handleOptionSelect}
              type={item.type}
            />
            <Space />
          </>
        ))}
      </View>
    </View>
  );
};

export default Questions;
