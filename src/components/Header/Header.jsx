import React from "react";
import styles from "./Header.module.css";
import { Link, Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  },
  {
    id: 4,
    name: 'About',
    to: '/about'
  },
  {
    id: 5,
    name: 'Articles',
    to: '/articles'
  },
  {
    id: 6,
    name: 'SignIn',
    to: '/signIn'
  },
  {
    id: 7,
    name: 'SignUp',
    to: '/signUp'
  },
]

const Header = (props) => {
  const name = useSelector((store) => store.name)

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
                    color: isActive ? 'green' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <p>{name}</p>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Header;