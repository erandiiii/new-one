import React from 'react'
import { navData } from './Data'
import { Link } from 'react-router-dom'

const NavMegamenu = () => {
    return (
        <div className="nav-megamenu">
            <div className='left'>
            {navData.map((props) => {
                return (
                    <div className="megamenu-list">
                        <h3>{props.category}</h3>
                        <div className="links">
                            {props.links.map((l) => {
                                return (
                                    <Link key={l.to} to={l.to}>
                                        {l.link}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )
            })}
            </div>
            <div className='right'></div>
          
           

        </div>
    )
}

export default NavMegamenu