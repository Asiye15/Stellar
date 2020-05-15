import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity, Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import './index.styl'

export default observer(function Introduction () {
  return pug`
    View.root
      View.image
        Image.phoneImage(source=require('./img/phone.jpg'))
      View.textBlock
        Text.title Ipsum sed adipiscing
        View.linearLine
        // LinearGradient(colors=['#4c669f', '#3b5998', '#192f6a'] start={x: 0, y: 0} end={x: 1, y: 0})
        Text.description Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
        TouchableOpacity.learnMore
          Text.learnMoreText Learn More
  `
})
