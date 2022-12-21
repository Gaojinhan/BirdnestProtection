import React from 'react'
import { violationsInfo, violationsInfoList } from '../../types'
import Info from './Info'

const InfoList = (violations: violationsInfoList) => {
  return (
    <div>
      {violations.violations.map((violation) => (
        <Info {...violation}/>))}
    </div>
  )
}

export default InfoList
