import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

const Main = () => (
  <PaperProvider>
    <App/>
  </PaperProvider>
);

export default Main;

AppRegistry.registerComponent(appName, () => Main);
