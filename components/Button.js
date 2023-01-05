import React from 'react'
import { Text, Touchable, TouchableOpacity } from 'react-native'

const Button = ({text}) => {
  return (
    <TouchableOpacity>
        <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button