/* eslint-disable react/prop-types */
import React, { useState } from 'react';






const randNumbers = [
  {
    id: 0,
    title: 'Lorem1 IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum ',
    description: 'ipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sit',
    rating: 10,
  },
  {
    id: 1,
    title: 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum ',
    description: 'ipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sit',
    rating: 4,
  },
  {
    id: 2,
    title: 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum ',
    description: 'ipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sit',
    rating: 3,
  },
  {
    id: 3,
    title: 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum ',
    description: 'ipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sitipsum dolor sit',
    rating: 2,
  }
]


function ListElement() {

  const [showNav, toggleNav] = useState(false);
  const [count, incrementCount] = useState(0);


  return (
      <React.Fragment>

      </React.Fragment>
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