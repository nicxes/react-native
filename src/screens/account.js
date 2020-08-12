// React things
import React from 'react'

// Packages
import styled from 'styled-components/native'

// Components
import Item from '../components/menu/item'

export default function Account({ navigation }) {
  return (
    <Screen>

      <Menu>
        <Item text="Inicio" icon="home"/>
        <Item text="Mis seguros" icon="wallet"/>
        <Item text="Actividad" icon="profile"/>

      </Menu>

      <Menu>
        <Item text="Pagar" icon="creditcard"/>
        <Item text="Beneficios" icon="staro"/>
      </Menu>

      <Menu>
        <Item text="Mi Perfil" icon="user"/>
        <Item text="Ayuda" icon="questioncircleo"/>
        <Item text="Salir" icon="logout"/>
      </Menu>

    </Screen>
  );
}

const Screen = styled.View`
  position: relative;
  background: #fefefe;
`

const Menu = styled.View`
  position: relative;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`