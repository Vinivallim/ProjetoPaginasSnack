// Screen7.js
import React from 'react'
import { View, Text, Button } from 'react-native'

function Screen7({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff69b4' }}>
      <Text>Screen 7</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('MainPage')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Screen6')} />
        <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
    </View>
  )
}

export default Screen7
