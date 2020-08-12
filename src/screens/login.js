// React things
import React from 'react'
import { View, TouchableWithoutFeedback, Keyboard } from "react-native"

// Packages
import styled from 'styled-components/native'

// Components
import Logo from '../components/logo'

export default function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss(); }}>
      <Screen>
        <Container>

          <Logo height="80px"/>

          <View>
            <Title>Iniciar sesión</Title>

            <CustomInput
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor="#707070"
            />

            <CustomInput
              secureTextEntry={true}
              placeholder="Contraseña"
              placeholderTextColor="#707070"
            />
          </View>

          <View>
            <Subtitle>¿Todavía no tenes una cuenta?</Subtitle>
            <Link onPress={() => navigation.push('Register')}>Crear una cuenta</Link>
          </View>

          <Button onPress={() => navigation.push('Dashboard')}>
            <ButtonText>Continuar</ButtonText>
          </Button>

        </Container>
      </Screen>
    </TouchableWithoutFeedback>
  )
}

const Screen = styled.View`
  position: relative;
  background: #fff;
  padding: 60px 0 30px 0;

  height: 100%;
`

const Container = styled.View`
  position: relative;
  padding: 0 16px;

  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.Text`
  color: #3E414A;
  font-size: 32px;
  font-weight: 500;
  text-align: center;

  margin-bottom: 40px;
`

const CustomInput = styled.TextInput`
  position: relative;
  width: 100%;

  padding: 15px;
  margin-bottom: 20px;

  background: #fff;
  shadow-color: #000;
  shadow-opacity: 0.09;
  shadow-offset: 0px 0px;
`

const Subtitle = styled.Text`
  color: #3E414A;
  font-size: 18px;
  font-weight: 500;
  text-align: center;

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