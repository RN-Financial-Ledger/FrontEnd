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

import TextCtrl from '@controllers/text/TextCtrl'
import TextGrayCtrl from '@controllers/text/TextGrayCtrl'
const Section: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({title}) => {
  return (
    <View style={tw`p-4 android:pt-2 bg-indigo-300 flex-row`}>
      <TextCtrl>{title}</TextCtrl>
      <TextGrayCtrl>{title}</TextGrayCtrl>
    </View>
  )
}

const MyComponents = () => {
  return <Section title="오늘 현재까지" />
}

export default MyComponents
