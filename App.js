/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import CameraView from './src/pages/CameraView';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CameraView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
