import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Sumadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const sumNumbers = () => {
    setResult(parseInt(num1, 10) + parseInt(num2, 10));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        onChangeText={setNum1}
        value={num1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        onChangeText={setNum2}
        value={num2}
      />
      <Button title="Sumar" onPress={sumNumbers} />
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    width: '80%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Sumadora;
