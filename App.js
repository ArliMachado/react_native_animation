import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';

export default function App() {
  const [ballY, setBallY] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.decay(ballY, {
      velocity: 1,
    }).start();
  }, [ballY]);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Animated.View style={[styles.ball, {top: ballY}]} />
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
