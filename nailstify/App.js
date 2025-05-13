import React, { Component, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation'
import { Provider } from 'react-redux'
import MyStore from './src/components/redux/Store';

export default function App() {

  return (
    <Provider  store={MyStore} style={{ flex: 1 }}>
      <Navigation />
    </Provider>
  )
}

