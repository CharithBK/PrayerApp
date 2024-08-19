import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, useColorScheme } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Card, Text } from 'react-native-paper';
import HalfBoldText from '../components/HalfBoldText';

const { width } = Dimensions.get('window');

const prayers = {
  BREAD: [
    "O God the Eternal Father",
    "We ask thee",
    "in the name of thy Son Jesus Christ",
    "to bless and sanctify this bread",
    "to the souls of all those",
    "who partake of it",
    "that they may eat",
    "in remembrance of the body of thy Son",
    "and witness unto thee",
    "O God the Eternal Father",
    "that they are willing",
    "to take upon them",
    "the name of thy Son",
    "and always remember him",
    "and keep his commandments",
    "which he has given them;",
    "that they may always have",
    "his Spirit to be with them. Amen."
  ],
  WATER: [
    "O God the Eternal Father",
    "We ask thee",
    "in the name of thy Son Jesus Christ",
    "to bless and sanctify this water",
    "to the souls of all those",
    "who drink of it",
    "that they may do it",
    "in remembrance of the blood",
    "of thy Son",
    "which was shed for them;",
    "that they may witness unto thee",
    "O God the Eternal Father",
    "that they do always remember him",
    "that they may have",
    "his Spirit to be with them. Amen."
  ]
};

const PrayerScreen = ({ route }) => {
  const { type } = route.params;
  const [index, setIndex] = useState(0);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const nextLine = () => {
    if (index < prayers[type].length - 1) {
      setIndex(index + 1);
    }
  };

  const prevLine = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleGesture = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX < -width / 10) {
        nextLine();
      } else if (nativeEvent.translationX > width / 10) {
        prevLine();
      }
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={handleGesture}>
      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <View style={[styles.card, isDarkMode && styles.cardDark]}>
          <Card.Content>
            <HalfBoldText text={prayers[type][index]} />
          </Card.Content>
        </View>
        <Text style={[styles.pageNumber, isDarkMode && styles.pageNumberDark]}>
          {`${index + 1}/${prayers[type].length}`}
        </Text>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#000',
  },
  card: {
    width: width,
    height: 200,
    padding: 20,
    // elevation: 4,
    backgroundColor: '#fff',
  },
  cardDark: {
    backgroundColor: '#333',
  },
  line: {
    fontSize: 32,
    textAlign: 'center',
  },
  pageNumber: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  pageNumberDark: {
    color: '#fff',
  },
});

export default PrayerScreen;
