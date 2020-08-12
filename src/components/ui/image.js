import React from 'react';
import styled from 'styled-components/native'

export default function Banner(props) {
  return (
    <Image source={{ uri: props.url }}/>
  )
}

const Image = styled.Image`
  height: ${props => props.height || '200px' };
  width: ${props => props.width || 'auto' };

  resize-mode: contain;
`