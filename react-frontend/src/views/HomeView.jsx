/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import * as d3 from 'd3';


function ListElement() {

  const [showNav, toggleNav] = useState(false);
  const [count, incrementCount] = useState(0);

  const div = d3.selectAll('div')

  return (
    <div>

    </div>
  )
}


function HomeView() {
  return (
    <React.Fragment>
      <ul>
        {randNumbers.map((card) => <ListElement key={card.id}  />)}
      </ul>

    </React.Fragment>
  )
}

ListElement.propTypes = {

}

export default HomeView;