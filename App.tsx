/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import RootStack from './stack/RootStack';




function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <RootStack/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});

export default App;
