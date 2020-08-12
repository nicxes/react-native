// React things
import React from 'react'
import { TouchableHighlight } from 'react-native'

// Packages
import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export default function Item(props) {
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
      <Option>
        <AntDesign name={props.icon} size={21} color="black" />
        <Text>{props.text}</Text>
      </Option>
    </TouchableHighlight>
  )
}

const Option = styled.View`
  padding: 14px 25px;

  flex-direction: row;
  align-items: center;
`

const Text = styled.Text`
  font-size: 15px;
  font-weight: 500;

  margin-left: 15px;
`