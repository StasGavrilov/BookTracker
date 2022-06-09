import React from 'react'
import Link from 'next/link'
import classes from '../styles/navbar.module.css'

const NavBar = () => {
    return (
        <>
            <nav>
                <div className={classes.header}>
                    <a href="/" className={classes.logo}>Book<span>Tracker.</span></a>

                    <ul className='right'>
                        <li><Link href="/"><a>All Books</a></Link></li>
                        <li><Link href="/read"><a>Books I Read</a></Link></li>
                        <li><Link href="/favorites"><a>Favorites</a></Link></li>
                        <li><Link href="/newbook"><a>New Book</a></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar