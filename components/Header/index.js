import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

export default observer(function Header ({ style }) {
  const sections = ['Introduction', 'First Section', 'Second Section', 'Get Started']
  return pug`
    View.root
      each section in sections
        TouchableOpacity.section
          Text.sectionTitle= section
  `
})
