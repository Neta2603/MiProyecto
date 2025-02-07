import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Traductor = () => {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  const numberToWords = (num) => {
    const ones = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const tens = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const hundreds = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (num === 0) {return 'cero';}
    if (num === 100) {return 'cien';}
    if (num < 10) {return ones[num];}
    if (num < 20) {return teens[num - 10];}
    if (num < 100) {return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' y ' + ones[num % 10] : '');}
    if (num < 1000) {return hundreds[Math.floor(num / 100)] + (num % 100 !== 0 ? ' ' + numberToWords(num % 100) : '');}
    return 'Número fuera de rango';
  };

  const translate = () => {
    const num = parseInt(number, 10);
    if (!isNaN(num) && num >= 0 && num < 1000) {
      setText(numberToWords(num));
    } else {
      setText('Introduce un número entre 0 y 999');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número"
        onChangeText={setNumber}
        value={number}
      />
      <Button title="Traducir" onPress={translate} />
      {text !== '' && <Text style={styles.result}>{text}</Text>}
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

export default Traductor;
