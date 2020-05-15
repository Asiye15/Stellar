import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCode, faCopy, faGem } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(function FirstSection ({ style }) {
  return pug`
    View.root
      Text.title Magna veroeros
      View.linearLine
      View.features
        View.feature
          View.iconContent
            View.iconInside
              FontAwesomeIcon.icon(icon=faCode color='#efa8b0' size=60)
          Text.descriptionTitle Ipsum consequat
          Text.description Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
        View.feature
          View.iconContent
            View.iconInside
              FontAwesomeIcon.icon(icon=faCopy color='#a89cc8' size=60)
          Text.descriptionTitle Amed sed feugiat
          Text.description Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
        View.feature
          View.iconContent
            View.iconInside
              FontAwesomeIcon.icon(icon=faGem color='#8cc9f0' size=60)
          Text.descriptionTitle Dolor nullam
          Text.description Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
      TouchableOpacity.learnMore
        Text.learnMoreText Learn More
  `
})
