import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TablaMultiplicar = () => {
  const [num, setNum] = useState('');
  const [tabla, setTabla] = useState([]);

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= 13; i++) {
      table.push(`${num} x ${i} = ${num * i}`);
    }
    setTabla(table);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número"
        onChangeText={setNum}
        value={num}
      />
      <Button title="Generar Tabla" onPress={generateTable} />
      {tabla.length > 0 && tabla.map((item, index) => (
        <Text key={index} style={styles.result}>{item}</Text>
      ))}
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

export default TablaMultiplicar;
