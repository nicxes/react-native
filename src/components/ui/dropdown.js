import React, { useState } from 'react';
import { Alert } from "react-native";

import styled from 'styled-components/native'

export default function Dropdown() {
  const onTap = () => {
    Alert.alert('Próximamente', 'No tenes una idea lo difícil que hacer un dropdown nativo')
  }

  return (
    <>
      <Select onPress={onTap}>
        <Text>Año</Text>
      </Select>

      <View style={{display: 'none'}}>
        <Picker>
          <Picker.Item label="Año" value={"0"} />
          <Picker.Item label="2020" value={"1"} />
          <Picker.Item label="2019" value={"2"} />
          <Picker.Item label="2018" value={"3"} />
          <Picker.Item label="2017" value={"4"} />
          <Picker.Item label="2016" value={"5"} />
          <Picker.Item label="2015" value={"6"} />
          <Picker.Item label="2014" value={"7"} />
        </Picker>        
      </View>
    </>
  )
}

const Select = styled.TouchableOpacity`
  position: relative;
  width: 100%;

  padding: 15px;
  margin-bottom: 20px;

  background: #fff;
  shadow-color: #000;
  shadow-opacity: 0.09;
  shadow-offset: 0px 0px;
`

const Text = styled.Text`
  color: #707070;
`

const View = styled.View`
  position: absolute;
  left: -20px;
  right: -20px;
  bottom: 100%;
  z-index: 1;

  background: #eee;
  border: 1px solid #ddd;

  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 40px;
`

const Picker = styled.Picker`
  color: #707070;

  padding-bottom: 20px;
  border: 0;
`