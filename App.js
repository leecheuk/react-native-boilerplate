import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import notificationReducer from './redux/NotificationReducer';
import TabNavigator from './components/TabNavigator';

const store = createStore(notificationReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    )
  }
}