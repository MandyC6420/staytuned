import React from 'react'
import { Card } from 'semantic-ui-react'
//semantic card not being used
const CardExampleLinkCardProp = () => (
  <Card
    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />
)

export default CardExampleLinkCardProp