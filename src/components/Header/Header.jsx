import React from "react";
import styles from "./Header.module.css";
import { Link, Outlet, NavLink } from 'react-router-dom';


const navigate = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chats',
    to: '/chats'
  }
]

const Header = (props) => {
  return (
    <>
      <header>
        <nav className={styles.header}>
          <ul>
            {navigate.map((link) => (
              <li key={link.id}>
                <NavLink 
                  to={link.to}
                  style={({ isActive }) => ({
                    color:  isActive ? 'green' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Header;