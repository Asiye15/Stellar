import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import { Content, Footer } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      View.main
        Content
        Footer
          
  `
})
