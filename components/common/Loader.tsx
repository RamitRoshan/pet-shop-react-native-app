import { View, Text, ActivityIndicator } from 'react-native'

export default function Loader() {
  return (
    <View style={{marginTop: 20}}>
      {/* <Text>Loader</Text> */}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

 