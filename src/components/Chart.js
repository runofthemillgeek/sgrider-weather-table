import React from 'react'

import { Sparklines, SparklinesLine } from 'react-sparklines'

const Chart = ({ data, color }) => {
  console.log(data);

  return (
    <Sparklines svgHeight={150} width={100} data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  )
}

export default Chart