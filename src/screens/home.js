// React things
import React from 'react';
import { View, Alert } from "react-native";

// Packages
import styled from 'styled-components/native'

export default function Home({ navigation }) {
  return (
    <Screen>
      <Container>

        <View>
          <Avatar source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9qfaPzjAwuNxaJO5RzHeLsyPJZT6-Avq2ig&usqp=CAU' }}/>
          <Title>¡Hola Juan!</Title>
          <Description>Soy Jessica, voy a guiarte a través del proceso para cotizar tu seguro</Description>
          <Description>¿Estás listo para comenzar?</Description>

          <Button onPress={() => Alert.alert('Próximamente', 'Estamos optimizando el código para que puedas buscar todas las ofertas del país.')}>
            <ButtonText>Empezar</ButtonText>
          </Button>
        </View>

      </Container>
    </Screen>
  );
}

const Screen = styled.View`
  position: relative;
  background: #fefefe;
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

const Avatar = styled.Image`
  height: 100px;
  width: 100px;

  border-radius: 100px;

  margin: 0 auto;
`

const Title = styled.Text`
  color: #3E414A;
  font-size: 28px;
  font-weight: 500;
  text-align: center;

  margin-top: 20px;
  margin-bottom: 10px;
`

const Description = styled.Text`
  color: #777;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  
  max-width: 330px;
  margin: 0 auto;
  margin-bottom: 20px;
`

const Button = styled.TouchableOpacity`
  padding: 12px 40px;
  margin: 0 auto;

  background: #FE7614;
  border-radius: 5px;
`

const ButtonText = styled.Text`
  color: #fff;
	font-size: 16px;
	font-weight: 600;
  text-align: center;
`;