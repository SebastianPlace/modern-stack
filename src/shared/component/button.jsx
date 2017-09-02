// @flow

import React from 'react'
import injectSheet from 'react-jss'

import { primary, darken } from '../styles/colours'
import { borderRadius } from '../styles/variables'

const styles = {
  button: {
    backgroundColor: primary,
    border: 'none',
    borderRadius,
    color: 'white',
    cursor: 'pointer',
    padding: '1em',
    '&:hover': {
      backgroundColor: darken(primary),
    },
  },

}

type Props = {
  classes: Object,
  label: string,
  handleClick: Function
}

const Button = ({ classes, label, handleClick }: Props) => (
  <button className={classes.button} onClick={handleClick}>{label}</button>
)

export default injectSheet(styles)(Button)
