import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.buttonDark]}
        onPress={() => navigation.navigate('Prayer', { type: 'BREAD' })}
      >
        <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>BREAD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isDarkMode && styles.buttonDark]}
        onPress={() => navigation.navigate('Prayer', { type: 'WATER' })}
      >
        <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>WATER</Text>
      </TouchableOpacity>
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
  containerDark: {
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#CCC',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonDark: {
    backgroundColor: '#bb86fc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextDark: {
    color: '#000',
  },
});

export default HomeScreen;
