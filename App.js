import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';

export default function App() {
  const [ballY] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(ballY, {
        toValue: 300,
        duration: 1000,
      }),
    ]).start();
  }, [ballY]);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.ball,
              {
                top: ballY,
                opacity: ballY.interpolate({
                  inputRange: [0, 300],
                  outputRange: [1, 0],
                }),
              },
            ]}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});
