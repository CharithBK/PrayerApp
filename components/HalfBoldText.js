import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HalfBoldText = ({ text }) => {
  const renderHalfBoldText = (word) => {
    const halfIndex = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, halfIndex);
    const secondHalf = word.slice(halfIndex);
    return (
      <Text>
        <Text style={styles.bold}>{firstHalf}</Text>
        {secondHalf}
      </Text>
    );
  };

  return (
    <Text style={styles.container}>
      {text.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          {renderHalfBoldText(word)}{' '}
        </React.Fragment>
      ))}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    textAlign: 'center',
    flexWrap: 'wrap',
     overflow: 'visible'
  },
  bold: {
    fontWeight: 'bold',
    flexWrap: 'wrap', 
    overflow: 'visible'
  },
});

export default HalfBoldText;
