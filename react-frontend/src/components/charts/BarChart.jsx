import React, {useRef, useEffect, useState} from 'react';
import * as d3 from 'd3';

function BarChart() {
  let containerRef = useRef()
  const initData = [100, 200, 300, 400, 500];
  const dimensions = {width: '1200px', height: '600px'}

  const [barData, updateData] = useState(initData)

  useEffect(() => {
    let svg = d3.select(containerRef)
      .append('svg')
      .attr('width', dimensions.width)
      .attr('height', dimensions.height);

    let height = 50;

    let rect_width = 95;
    svg.selectAll('rect')
      .data(barData)
        .enter()
        .append('rect')
        .attr('x', (d, i) => 5 + i*(rect_width + 5))
        .attr('y', 0)
        .attr('width', rect_width)
        .attr('height', d => `${d}px`)
        .attr('fill', 'teal');
  }, [barData])

  return (
    <React.Fragment>
      <div ref={(container) => {containerRef = container}}>

      </div>
    </React.Fragment>
  )
}

export default BarChart;