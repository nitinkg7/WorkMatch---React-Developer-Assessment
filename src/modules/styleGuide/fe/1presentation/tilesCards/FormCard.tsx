import React, {ReactNode} from 'react'
import {Headline} from '../typography/Headline'
import {Card} from './Card'


interface IFormCard {
  children: ReactNode
  heading?: string
  showHoverEffect?: boolean
}

export const FormCard = ({children, heading, showHoverEffect}: IFormCard) => {
  return (
    <>
      <Card showHoverEffect={showHoverEffect}>
        <div className="formCard">
          {heading && <Headline level={3}>{heading}</Headline>}
          {children}
        </div>
      </Card>

      <style jsx>
        {`
          .formCard {
            max-width: 25rem;
            margin: 0 auto;
          }
        `}
      </style>

    </>
  )
}

