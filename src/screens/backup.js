// React things
import React from 'react';
import { View } from "react-native";

// Packages
import styled from 'styled-components/native'

// Components
import Logo from '../components/logo'
import Image from '../components/ui/image'
import Dropdown from '../components/ui/dropdown'

export default function Home({ navigation }) {
  return (
    <Screen>
      <Container>

        <View>
          <Image url="https://agilyseguro.com/wp-content/uploads/2019/09/header-1-768x513.png"/>
          <Title>Gestioná tu seguro de principio a fin</Title>

          <Dropdown/>
          <Dropdown/>
        </View>

        <View>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Cotizar</ButtonText>
          </Button>
        </View>

      </Container>
    </Screen>
  );
}

const Screen = styled.View`
  position: relative;
  background: #fff;
  padding: 30px 0 30px 0;

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
  text-transform: uppercase;

  margin-top: 20px;
  margin-bottom: 40px;
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

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="home" size={20} color="black"/> Inicio
</Item>
</TouchableHighlight>

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="wallet" size={20} color="black"/> Mi seguro
</Item>
</TouchableHighlight>

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="profile" size={20} color="black" /> Actividad
</Item>
</TouchableHighlight>

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="creditcard" size={20} color="black" /> Pagar
</Item>
</TouchableHighlight>

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="staro" size={20} color="black" /> Beneficios
</Item>
</TouchableHighlight>

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="user" size={20} color="black" /> Tu Perfil
</Item>
</TouchableHighlight>

<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => alert('Pressed!')}>
<Item>
  <AntDesign name="questioncircleo" size={20} color="black" /> Ayuda
</Item>
</TouchableHighlight>