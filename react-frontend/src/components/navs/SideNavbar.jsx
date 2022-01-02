import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAreaChart, AiFillSetting, AiFillBook } from "react-icons/all";

function SideNavbar({
  showMobile,
  toggleShowMobile,
}) {
  const iconSize = 36;

  return (
    <section className="flex">
      <nav className="flex flex-col bg-light-gray-50 shadow-lg h-full">
        <div className="flex min-w-min px-2 py-2">
          <button onClick={() => toggleShowMobile(!showMobile)} className={showMobile ? 'hamburger active' : 'hamburger'}>
            <div/>
            <div/>
            <div/>
          </button>
        </div>

        <section className="flex px-2 lg:px-0 transition duration-150 ease-in-out h-full">
          <ul className="flex flex-col py-3 mx-2">
            <li className="text-mirage-400 py-1 mr-4">
              <Link className="text-mirage-400 flex items-center" to="/">
                <AiOutlineAreaChart size={iconSize} />
                 Charting
              </Link>
            </li>

            <li className="text-mirage-400 py-1 mr-4">
              <Link className="text-mirage-400 flex items-center" to="/articles">
                <AiFillBook size={iconSize} className="pr-2" />
                Learn
              </Link>
            </li>
            <li className="text-mirage-400 py-1 mr-4 mt-auto">
              <Link className="text-mirage-400 flex items-center" to="/">
                <AiFillSetting size={iconSize} className="pr-2" />
                Settings
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </section>
  )
}


SideNavbar.propTypes = {
  showMobile: PropTypes.bool.isRequired,
  toggleShowMobile: PropTypes.func.isRequired
}

export default SideNavbar;