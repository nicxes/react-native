// React things
import React from 'react';
import { View } from 'react-native'

// Packages
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useFonts, roboto } from '@expo-google-fonts/roboto'
import { AntDesign } from '@expo/vector-icons';

// Screens
import Loading from './screens/loading'
import Login from './screens/login'
import Register from './screens/register'

import Home from './screens/home'
import Wallet from './screens/wallet'
import Account from './screens/account'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => this.handleLoading(), 2000)
  }
  handleLoading() {
    this.setState({
      loading: this.state.loading = false
    })
  }
  createHomeStack = () => {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#FE7614',
        inactiveTintColor: '#707070',
        labelStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={
          {
            title: 'Inicio',
            tabBarIcon: () => (
              <AntDesign name="home" size={24}/>
            ) 
          }
        }/>
        <Tab.Screen name="Wallet" component={Wallet} options={
          { 
            title: 'Mis seguros',
            tabBarIcon: () => (
              <AntDesign name="wallet" size={24}/>
            )
          }
        }/>
        <Tab.Screen name="Account" component={Account} options={
          {
            title: 'Mi cuenta',
            tabBarIcon: () => (
              <AntDesign name="user" size={24}/>
            )
          }
        }/>
      </Tab.Navigator>
    )
  }
  render() {
    if (!this.state.loading) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerBackTitle: 'Volver',
            headerTintColor: '#FE7614',
            headerTitleStyle: { color: 'black' }
          }}>

            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ title: 'Crear una cuenta' }} />
            <Stack.Screen name="Dashboard" children={this.createHomeStack} options={{
              title: 'Ágil & Seguro',
              headerLeft: null,
              headerStyle: {
                backgroundColor: '#FE7614'
              },
              headerTitleStyle: { color: '#fff' }
            }}/>

          </Stack.Navigator>
        </NavigationContainer>
      )
    } else {
      return (
        <View onPress={this.handleLoading}>
          <Loading/>
        </View>
      )
    }
  }
}
