// @flow

import { connect } from 'react-redux'

import { getExercisesAsync } from '../action/exercises'
import Button from '../component/button'

const mapStateToProps = () => ({
  exercises: [],
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(getExercisesAsync()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
