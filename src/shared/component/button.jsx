// @flow

import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    borderRadius: '4px',
    backgroundColor: 'blue',
    padding: '6px',
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
