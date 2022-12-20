import React from 'react'
import {Props} from '../../types'

const Header = (props:Props) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}

export default Header