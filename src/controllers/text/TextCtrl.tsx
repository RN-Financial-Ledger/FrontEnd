import {View, Text} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

interface Props {
  children: string
  fontSize?: string
}

const TextCtrl = ({children, fontSize = 'text-base'}: Props) => {
  return (
    <View style={tw`bg-indigo-400 h-6 inline-block align-middle  `}>
      <Text style={tw`${fontSize}`}>{children}</Text>
    </View>
  )
}

export default TextCtrl
