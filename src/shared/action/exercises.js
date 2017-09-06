// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { EXERCISES_PAGE_ROUTE } from '../../shared/routes'

export const GET_EXERCISES_ASYNC_REQUEST = 'GET_EXERCISES_ASYNC_REQUEST'
export const GET_EXERCISES_ASYNC_SUCCESS = 'GET_EXERCISES_ASYNC_SUCCESS'
export const GET_EXERCISES_ASYNC_FAILURE = 'GET_EXERCISES_ASYNC_FAILURE'

export const getExercisesAsyncRequest = createAction(GET_EXERCISES_ASYNC_REQUEST)
export const getExercisesAsyncSuccess = createAction(GET_EXERCISES_ASYNC_SUCCESS)
export const getExercisesAsyncFailure = createAction(GET_EXERCISES_ASYNC_FAILURE)

export const getExercisesAsync = () => (dispatch: Function) => {
  dispatch(getExercisesAsyncRequest())
  return fetch(EXERCISES_PAGE_ROUTE, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received')
      dispatch(getExercisesAsyncSuccess(data.serverMessage))
    })
    .catch(() => {
      dispatch(getExercisesAsyncFailure())
    })
}
