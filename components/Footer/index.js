import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import './index.styl'

const WHITE_COLOR = '#fff'

export default observer(function Introduction ({ style }) {
  return pug`
    View.root
      View.section
        Text.title Aliquam sed mauris
        Text.description Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        TouchableOpacity.learnMore
          Text.learnMoreText Learn More
      View.section
        Text.title Etiam feugiat
        View.info
          View.rightSection
            Text.subSectionTitle Address
            Text.subSectionTitle Phone
            Text.subSectionTitle Email
          View.rightSection
            Text.sectionDescription 1234 Somewhere Road • Nashville, TN 00000 • USA
            Text.sectionDescription (000) 000-0000 x 0000
            Text.descriptionEmail information@untitled.tld
        View.icons
          View.iconInside
            FontAwesomeIcon.icon(icon=faTwitter color=WHITE_COLOR size=20)
          View.iconInside
            FontAwesomeIcon.icon(icon=faFacebookF color=WHITE_COLOR size=20)
          View.iconInside
            FontAwesomeIcon.icon(icon=faInstagram color=WHITE_COLOR size=20)
          View.iconInside
            FontAwesomeIcon.icon(icon=faGithub color=WHITE_COLOR size=20)
          View.iconInside
            FontAwesomeIcon.icon(icon=faDribbble color=WHITE_COLOR size=20)
  `
})
