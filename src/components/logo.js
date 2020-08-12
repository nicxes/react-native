import React from 'react'
import styled from 'styled-components/native'

export default function Logo(props) {
  return (
    <Image
      height={props.height}
      source={{ uri: 'https://agilyseguro.com/wp-content/uploads/2019/08/logo.png' }}
    />
  )
}

const Image = styled.Image`
  height: ${props => props.height || '50px' };
  width: ${props => props.width || 'auto' };

  resize-mode: contain;
`