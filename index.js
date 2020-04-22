import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import store from './src/store/index'

//const store = createStore(rootReducer);

const AppReduxContainer = () =>
<NavigationContainer>
    <Provider store={store}>
        <App/>
    </Provider>
</NavigationContainer>

AppRegistry.registerComponent(appName, () => AppReduxContainer);
