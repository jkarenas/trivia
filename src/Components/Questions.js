import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import  dataQuestions  from '../../questions.json';

const Questions = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < dataQuestions.results.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigation.navigate('Results', { score: score });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{dataQuestions.results[currentQuestion].question}</Text>
      {dataQuestions.results[currentQuestion].answers.map((answer, index) => (
        <Button
          key={index}
          title={answer}
          onPress={() => handleAnswerOptionClick(index === dataQuestions.results[currentQuestion].correct_answer)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  }
});

export default Questions;
