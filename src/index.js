import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const calculateBmi = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setDescription("underweight, eat more !!");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDescription("normal, keep it up !!");
    } else if (bmi >= 25) {
      setDescription("overweigth, start working out !!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> Bmi Calculator</Text>
      </View>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="weight in kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={(text) => setHeight(text)}
        placeholder="height in cm"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default BmiCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ecde",
    paddingTop: 50,
  },
  title: {
    backgroundColor: "#2c6975",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#cde09c",
    fontSize: 18,
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 5,
    backgroundColor: "#68b2a0",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  resultView: {
    margin: 15,
  },
  result: {
    fontSize: 30,
    color: "#2c6975",
    fontWeight: "bold",
  },
});
