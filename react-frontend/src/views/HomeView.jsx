import React, { useState } from 'react';
import BarChart from '@components/charts/BarChart';
import SideNavbar from '@components/navs/SideNavbar';
import logo from '@assets/logo.svg';



function HomeView() {
  let [showMobile, toggleShowMobile] = useState(false);

  return (
    <main className="flex h-screen">

      <SideNavbar showMobile={showMobile} toggleShowMobile={toggleShowMobile} />
      <BarChart />
      {/*<a href="#">*/}
      {/*  <img src={logo} alt="Logo" className="ml-2 h-6"/>*/}
      {/*</a>*/}
    </main>
  )
}

export default HomeView;