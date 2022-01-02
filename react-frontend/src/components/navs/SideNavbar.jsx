import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineAreaChart, AiFillSetting, FaGraduationCap } from "react-icons/all";
import { Link } from 'react-router-dom';

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
          <ul className="flex flex-col ml-1 py-3">
            <li className="text-mirage-400 py-1">
              <Link className="text-mirage-400 flex items-center" to="/">
                <AiOutlineAreaChart size={iconSize} />
                 <span className={showMobile ? 'mr-auto ml-2' : 'hidden invisible'}>Charting</span>
              </Link>
            </li>

            <li className="text-mirage-400 py-1 w-full">
              <Link className="text-mirage-400 flex items-center" to="/articles">
                <FaGraduationCap size={iconSize} />
                <span className={showMobile ? 'mr-auto ml-2' : 'hidden invisible'}>Learn</span>
              </Link>
            </li>
            <li className="text-mirage-400 py-1 mt-auto">
              <Link className="text-mirage-400 flex items-center" to="/">
                <AiFillSetting size={iconSize} />
                <span className={showMobile ? 'mr-auto ml-2' : 'hidden invisible'}>Settings</span>
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