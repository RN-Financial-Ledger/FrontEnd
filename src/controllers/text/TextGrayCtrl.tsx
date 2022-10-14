import {View, Text} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

interface Props {
  children: string
}

const TextGrayCtrl = ({children}: Props) => {
  return (
    <View style={tw`bg-green-500 h-6 inline-block align-middle  `}>
      <Text style={tw`text-xs text-gray-500`}>{children}</Text>
    </View>
  )
}

export default TextGrayCtrl
