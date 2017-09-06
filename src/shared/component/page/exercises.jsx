// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Exercises from '../../container/exercises'
import MessageAsync from '../../container/message-async'

const title = 'Exercises'

const ExercisesPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A list of exercises' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <MessageAsync />
    <Exercises />
  </div>
)

export default ExercisesPage
