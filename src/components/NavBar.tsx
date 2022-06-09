import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <nav className='blue'>
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="/" className='brand-logo'>Book<span>Tracker.</span></a>

                        <ul className='right'>
                            <li><Link href="/"><a>All Books</a></Link></li>
                            <li><Link href="/read"><a>Books I Read</a></Link></li>
                            <li><Link href="/favorites"><a>Favorites</a></Link></li>
                            <li><Link href="/newbook"><a>New Book</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar