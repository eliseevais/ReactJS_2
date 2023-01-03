import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from "../store/profile/actions";

const SignIn = (props) => {
  const [inputs, setInputs] = useState({ login: '', password: '' });
  const [error, setErors] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputs.login === 'gb' && inputs.password === 'gb') {
      dispatch(auth(true))
      navigate('/')
    } else {
      setErors('Login and password failed')
      setInputs({login: '', password: '' })
    }
  }

  return (
    <>
      <div>SignIn</div>
      <form onSubmit={handleSubmit}>
        <p>Login: </p>
        <input
          type="text"
          name="login"
          value={inputs.login}
          onChange={(event) => setInputs((prev) => (
            { ...prev, [event.target.name]: event.target.value }))}
        />
        <p>Password: </p>
        <input
          type="text"
          name="password"
          value={inputs.password}
          onChange={(event) => setInputs((prev) => (
            { ...prev, [event.target.name]: event.target.value }))}
        />
        <button>login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  )
}

export default SignIn;