/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import {initStore} from './src/redux/store'
const Main = () => {
    return (
        <Provider store={initStore()}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
