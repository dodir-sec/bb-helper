import React, { useState } from 'react'
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <React.Fragment>
            <div className={darkMode ? 'dark' : ''}>
                <div className='flex flex-row text-slate-800 dark:text-slate-400 bg-white dark:bg-slate-800 layout'>
                    <div className='bg-white basis-1/5 h-screen p-8 nav-bar dark:bg-slate-900' >
                        <NavBar />
                        <button className='mt-10' onClick={() => setDarkMode(!darkMode)}>
                            Toggle dark mode
                        </button>
                    </div>
                    <div className="basis-4/5 h-screen p-10" >
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout
