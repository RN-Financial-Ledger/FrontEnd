/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react'
import {Text, View} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Section: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({title}) => {
  return (
    <View style={tw`p-4 android:pt-2 bg-red-300 flex-row`}>
      <Text style={tw`text-md tracking-wide`}>{title}</Text>
    </View>
  )
}

const MyComponents = () => {
  return <Section title="Hello Wosdsdrld" />
}

export default MyComponents
