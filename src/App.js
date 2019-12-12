/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import WebView from './WebView'

const buttonStyle = {
  backgroundColor: '#eee',
  height: 50,
  paddingVertical: 15,
  paddingHorizontal: 20,
  marginRight: 15,
  marginTop: 15,
}

const App: () => React$Node = () => {
  const webViewRef = useRef()

  function prevHeading() {
    webViewRef.current.injectJS('window.scrollToPreviousHeading()')
  }

  function nextHeading() {
    webViewRef.current.injectJS('window.scrollToNextHeading()')
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView url="file:///android_asset/web/index.html" ref={webViewRef} />
      <View style={{ position: 'absolute', right: 0, flexDirection: 'row' }}>
        <TouchableHighlight onPress={prevHeading} style={buttonStyle}>
          <Text>Prev</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={nextHeading} style={buttonStyle}>
          <Text>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default App
