// @flow

import Helmet from 'react-helmet'
import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import ExercisesPage from './component/page/exercises'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  EXERCISES_PAGE_ROUTE,
} from './routes'

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route path={EXERCISES_PAGE_ROUTE} render={() => <ExercisesPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
