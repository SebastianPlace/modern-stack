// @flow

import React from 'react'
import injectSheet from 'react-jss'
import { primary } from '../styles/colours'
import { borderRadius } from '../styles/variables'

const styles = {
  button: {
    border: 'none',
    borderRadius,
    color: 'white',
    backgroundColor: primary,
    padding: '1em',
    '&:hover': {
      backgroundColor: 'red',
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
