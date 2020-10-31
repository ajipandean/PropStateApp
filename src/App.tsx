import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Appbar, Button, Title, Divider } from 'react-native-paper';
import Constants from 'expo-constants';
import HelloWorldToggle from './HelloWorldToggle';
import RealTimeInput from './RealTimeInput';

const App = () => {
  const [text, setText] = React.useState('Hello world');

  return (
    <SafeAreaView style={[styles.container]}>
      <Appbar.Header>
        <Appbar.Content title="PropStateApp"/>
      </Appbar.Header>
      <View>
        <HelloWorldToggle text={text}/>
        <Divider/>
        <RealTimeInput text={text} setText={setText}/>
      </View>
      <StatusBar style="inverted"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
