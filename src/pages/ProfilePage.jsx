import React, { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../store/profile/types';
import changeName from '../store/profile/actions'

const ProfilePage = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const name = useSelector((store) => store.name);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  // console.log('theme =====>', theme);
  // console.log('store', name);

  const handleChange = () => {
    console.log('value', value);
    // dispatch({type: types.CHANGE_NAME, payload: value});
    dispatch(changeName(value));
    setValue()
  }

  return (
    <>
      <h1>Profile page</h1>
      <p>{theme === 'light' ? '☀️' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <hr />
      <h2>{name}</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {/* <button onClick={handleChange}>Change name</button> */}
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </>
  )
}

export default ProfilePage;