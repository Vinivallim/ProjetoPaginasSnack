// Screen5.js
import React from 'react'
import { View, Text, Button } from 'react-native'

function Screen5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff0000' }}>
      <Text>Screen 5</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Screen6')} />
        <Button title="Anterior" onPress={() => navigation.navigate('Screen4')} />
        <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
    </View>
  )
}

export default Screen5
