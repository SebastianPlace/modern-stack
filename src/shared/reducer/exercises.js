// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  GET_EXERCISES_ASYNC_REQUEST,
  GET_EXERCISES_ASYNC_SUCCESS,
  GET_EXERCISES_ASYNC_FAILURE,
} from '../action/exercises'

const initialState = Immutable.fromJS({
  messageAsync: 'Initial reducer message for async call',
})

type Action = {
  type: string,
  payload: any,
}

const exercisesReducer = (state: Immut = initialState, action: Action) => {
  switch (action.type) {
    case GET_EXERCISES_ASYNC_REQUEST:
      return state.set('messageAsync', 'Loading...')
    case GET_EXERCISES_ASYNC_SUCCESS:
      return state.set('messageAsync', action.payload)
    case GET_EXERCISES_ASYNC_FAILURE:
      return state.set('messageAsync', 'No message received, please check your connection')
    default:
      return state
  }
}

export default exercisesReducer
