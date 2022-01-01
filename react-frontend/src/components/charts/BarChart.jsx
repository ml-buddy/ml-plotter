import React, {useRef, useEffect, useState} from 'react';
import * as d3 from 'd3';

function BarChart() {
  let containerRef = useRef()
  const initData = [133, 14541, 131, 543, 42154, 1245]
  const width = 20

  const [barData, updateData] = useState(initData)

  useEffect(() => {
    const update = d3.select(containerRef).selectAll('circle').data(barData);

    update
      .enter()
      .append('circle')
      .attr('r', (d) => d)
      .attr('cx', (_, i) => width * (i + 1))
      .attr('cy', () => Math.random() * 100)
      .attr('stroke', (_, i) => (i % 2 === 0 ? '#f80' : '#aaf'))
      .attr('fill', (_, i) => (i % 2 === 0 ? 'orange' : '#44f'));

    update
      .attr('r', (d) => d)
      .attr('cx', (_, i) => width * (i + 1))
      .attr('cy', () => Math.random() * 100)
      .attr('stroke', (_, i) => (i % 2 === 0 ? '#f80' : '#aaf'))
      .attr('fill', (_, i) => (i % 2 === 0 ? 'orange' : '#44f'));

    update.exit().remove();
    const test = d3.select(containerRef).append("p").text("Hello from D3");
  }, [])

  return (
    <React.Fragment>
      <svg ref={(container) => {containerRef = container}}>
        <g transform="translate(20, 100)" />
      </svg>
      {console.log(containerRef)}

    </React.Fragment>
  )
}

export default BarChart;