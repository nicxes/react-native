// React things
import React from 'react';
import { View } from "react-native";

// Packages
import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

// Components
import Logo from '../components/logo'

export default class Loading extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }
  render() {
    return (
      <Screen>
        <Container>

          <View>
            <Logo height="100px"/>
          </View>

          <Circle>        
            <Lottie ref={animation => { this.animation = animation }}
              style={{
                width: 80,
                height: 80,
              }} source={require('../assets/lottie/loading.json')}
            />
          </Circle>

        </Container>
      </Screen>
    )
  }
}

const Screen = styled.View`
  position: relative;
  padding: 60px 0 30px 0;

  height: 100%;
`

const Container = styled.View`
  position: relative;
  padding: 0 16px;

  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.Text`
  color: #3E414A;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;

  margin-top: 20px;
  margin-bottom: 15px;
`

const Circle = styled.View`
  margin-top: 40px;
  align-items: center;
`