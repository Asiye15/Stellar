import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

export default observer(function GetStarted ({ style }) {
  return pug`
    View.root
      Text.title Congue imperdiet
      View.linearLine
      Text.descriptionTitle
        | Donec imperdiet consequat consequat. Suspendisse feugiat congue
        | posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.buttons
        TouchableOpacity.getStarted
          Text.getStartedText Get Started
        TouchableOpacity.learnMore
          Text.learnMoreText Learn More
  `
})
