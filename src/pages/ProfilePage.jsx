import React, { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../store/profile/types';
import { changeName, toggleProfile } from '../store/profile/actions';
import { selectName, selectVisible } from "../store/profile/selectors";

const ProfilePage = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = () => {
    console.log('value', value);
    dispatch(changeName(value));
    setValue('')
  }

  return (
    <>
      <h1>Profile page</h1>
      <p>{theme === 'light' ? '☀️' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <hr />
      <h2>{name}</h2>
      <input
        type="checkbox"
        checked={visible}
        readOnly
      />
      <button onClick={() => dispatch(toggleProfile())}>Change visible</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </>
  )
}

export default ProfilePage;