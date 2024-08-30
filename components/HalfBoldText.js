import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

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

const calculateFontSize = (baseFontSize) => {
  const scaleFactor = screenWidth / 375; // Assuming 375 is the base screen width
  return baseFontSize * scaleFactor;
};

const styles = StyleSheet.create({
  container: {
    fontSize: calculateFontSize(35),
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
