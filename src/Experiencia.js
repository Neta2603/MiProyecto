import React from 'react';
import { View, WebView, StyleSheet } from 'react-native';

const Experiencia = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.youtube.com/watch?v=tu_video_id' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});

export default Experiencia;
