import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCodeBranch, faFolderOpen, faSignal, faLaptop, faGem } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function SecondSection ({ style }) {
  return pug`
    View.root
      Text.title Ipsum consequat
      View.linearLine
      Text.descriptionTitle
        | Donec imperdiet consequat consequat. Suspendisse feugiat congue
        | posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.features
        View.featureFirst
          FontAwesomeIcon.icon(icon=faCodeBranch color='#fff' size=78)
          Text.iconTitle 5,120
          Text.description Etiam
        View.featureSecond
          FontAwesomeIcon.icon(icon=faFolderOpen color='#fff' size=78)
          Text.iconTitle 8,182
          Text.description Magma
        View.featureThird
          FontAwesomeIcon.icon(icon=faSignal color='#fff' size=78)
          Text.iconTitle 2,048
          Text.description Tempus
        View.featureFourth
          FontAwesomeIcon.icon(icon=faLaptop color='#fff' size=78)
          Text.iconTitle 4,096
          Text.description Aliquam
        View.featureFifth
          FontAwesomeIcon.icon(icon=faGem color='#fff' size=78)
          Text.iconTitle 1,024
          Text.description Nullam
      Text.textDescription Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      TouchableOpacity.learnMore
        Text.learnMoreText Learn More
  `
})
