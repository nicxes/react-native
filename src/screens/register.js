// React things
import React from 'react'
import { View, TouchableWithoutFeedback, Keyboard, Switch } from "react-native"

// Packages
import styled from 'styled-components/native'

// Components
import Logo from '../components/logo'

export default function Register({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss(); }}>
      <Screen>
        <Container>
      
          <Label>Correo Electrónico</Label>
          <CustomInput
            autoCompleteType="email"
            keyboardType="email-address"
            placeholder="hola@gmail.com"
            placeholderTextColor="#707070"
          />

          <Label>Nombre completo</Label>
          <CustomInput
            placeholder="Juan Pedro"
            placeholderTextColor="#707070"
          />

          <Label>Apellidos</Label>
          <CustomInput
            placeholder="Rodriguez"
            placeholderTextColor="#707070"
          />

          <Label>Contraseña</Label>
          <Description>Debe incluir un símbolo o número y tener al menos 8 caracteres.</Description>
          <CustomInput
            secureTextEntry={true}
            placeholder="Contraseña"
            placeholderTextColor="#707070"
          />

          <Label>Fecha de Nacimiento</Label>
          <Description>Debes tener al menos 18 años.</Description>
          <CustomInput
            placeholder="22 de Noviembre 1995"
            placeholderTextColor="#707070"
          />

          <Label>Términos y Condiciones</Label>
          <Flex>
            <Column>
              <Description>Debes tener al menos 18 años. Debes tener al menos 18 años Debes tener al menos 18 años</Description>
            </Column>

            <Column>
              <Switch value={false} trackColor={{true: "#FE7614"}}/>
            </Column>
          </Flex>

          <Button onPress={() => navigation.push('Dashboard')}>
            <ButtonText>Confirmar</ButtonText>
          </Button>

        </Container>
      </Screen>
    </TouchableWithoutFeedback>
  )
}

const Screen = styled.ScrollView`
  position: relative;
  background: #fff;
  padding: 20px 0 0 0;
`

const Container = styled.View`
  position: relative;
  padding: 0 16px;
`

const Flex = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 40px;
`

const Column = styled.View`
  width: 80%;
`

const Label = styled.Text`
  color: #3E414A;
  font-size: 15px;
  font-weight: 500;

  margin-bottom: 5px;
`

const Description = styled.Text`
  color: #3E414A;
  font-size: 14px;
  font-weight: 300;

  margin-bottom: 5px;
`

const CustomInput = styled.TextInput`
  position: relative;
  width: 100%;

  padding: 15px;
  margin-top: 5px;
  margin-bottom: 25px;

  background: #fff;
  shadow-color: #000;
  shadow-opacity: 0.09;
  shadow-offset: 0px 0px;
`

const Subtitle = styled.Text`
  color: #3E414A;
  font-size: 18px;
  font-weight: 500;

  margin-top: 20px;
  margin-bottom: 10px;
`

const Link = styled.Text`
  color: #FE7614;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  margin-bottom: 15px;
`

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 60px;

  background: #FE7614;
  border-radius: 5px;
`

const ButtonText = styled.Text`
  color: #fff;
	font-size: 16px;
	font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;