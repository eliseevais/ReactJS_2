import React from "react";
import styles from "./Header.module.css";
import { Link, Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth, selectName } from "../../store/profile/selectors";
import { useNavigate } from "react-router-dom"; 
import { logOut } from "../../services/firebase"; 

const navigates = [
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
  // {
  //   id: 6,
  //   name: 'SignIn',
  //   to: '/signIn'
  // },
  // {
  //   id: 7,
  //   name: 'SignUp',
  //   to: '/signUp'
  // },
]

const Header = (props) => {

  const navigate = useNavigate();

  // const name = useSelector(selectName());
  // const isAuth = useSelector(selectAuth());
  const name = useSelector((store) => store.profile.name);
  const isAuth = useSelector((store) => store.profile.isAuth);

  const handleLogin = () => {
    navigate('/signin')
  }

  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleLogOut = async () => {
    await logOut()
  }

  return (
    <>
      <header>
        <nav className={styles.header}>
          <ul>
            {navigates.map((link) => (
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
            {!isAuth && (
              <>
                <button onClick={handleLogin}>login</button>
                <button onClick={handleSignUp}>sign up</button>
              </>
            )}
            {isAuth && (
              <>
                <button onClick={handleLogOut}>logout</button>
              </>
            )}
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