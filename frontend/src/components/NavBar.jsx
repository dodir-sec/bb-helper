import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'

function NavBar() {

  const links = [
    {
      name: 'Github Dorks',
      icon: 'ri-github-fill',
      path: '/github-dorks'
    },
    {
      name: 'Google Dorks',
      icon: 'ri-google-fill',
      path: '/google-dorks'
    },
    {
      name: 'Shodan Dorks',
      icon: 'ri-bubble-chart-line',
      path: '/shodan-dorks'
    },
    {
      name: 'Domain Tools',
      icon: 'ri-window-2-fill',
      path: '/domain-tools'
    },

  ]


  return (
    <div className='flex flex-col '>
      <div className='flex items-center	mb-10 gap-2'>
        <img src={Logo} className='w-16	rounded-full' alt="Logo" />
        <h1 className='text-2xl logo font-semibold	dark:text-white'>BB-Helper</h1>
      </div>
      <div className='flex flex-col gap-2'>
        {links.map((link, index) => (
          <Link key={index} to={link.path} className='flex flex-row gap-3 items-center nav-link p-1 transition duration-150 font-medium dark:hover:bg-slate-800 dark:hover:text-white rounded-md'>
            <i className={`${link.icon} text-xl `}></i>
            <span className='text-md font-medium'>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBar
