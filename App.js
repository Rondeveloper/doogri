
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainPage from './src/components/screens/MainPage';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigationContainer />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  MainPage: { screen: MainPage },
})

const AppNavigationContainer = createAppContainer(AppSwitchNavigator);

export default App;

