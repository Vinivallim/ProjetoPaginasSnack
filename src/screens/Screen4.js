// Screen4.js
import React from 'react'
import { View, Text, Button } from 'react-native'

function Screen4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4169e1' }}>
      <Text>Screen 4</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Screen5')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Screen3')} />
        <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
    </View>
  )
}

export default Screen4
