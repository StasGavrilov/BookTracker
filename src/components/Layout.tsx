import React from 'react'
import NavBar from './NavBar'
import classes from '../styles/layout.module.css'

const Layout = ({ children }: any) => {
    return (
        <div>
            <NavBar />
            <main className={classes.main}>{children}</main>
        </div>
    )
}

export default Layout