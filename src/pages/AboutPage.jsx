import React, { useContext, useState } from "react";
import { connect } from 'react-redux';

import { ThemeContext } from "../utils/ThemeContext";

import { changeName, toggleProfile } from '../store/profile/actions';

const AboutPage = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, setValue] = useState('');

  const handleChange = () => {

    setValue('')
  }

  return (
    <>
      <h1>Profile page</h1>
      <p>{theme === 'light' ? '☀️' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <hr />
      <h2>{props.name}</h2>
      <input
        type="checkbox" checked={props.visible} readOnly />
      <button onClick={() => props.toggle()}>Change visible</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => props.changeName(value)}>Change name</button>
    </>
  )
}

const mapStateToProps = (state) => ({
  name: state.profile.name,
  visible: state.profile.visible
})

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
  changeName: value => dispatch(changeName(value))
})

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage);