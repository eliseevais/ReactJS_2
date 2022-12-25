import React, { useState } from 'react';
import Button from '../UI/Button';
import AUTHOR from '../../constants';
import PropTypes from 'prop-types';
// import IButton from '@mui/material/Button';
// import ITextField from '@mui/material/TextField';

const Form = ({ addMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //to do...
    addMessage({
      author: AUTHOR.user,
      text: text
    })

    setText('')
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        {/* <ITextField
          id="standard-basic"
          label="Enter message"
          variant="standard"
          onChange={(event) => setText(event.target.value)}
          type='text'
          value={text}
        /> */}
        <Button type='submit'>
          Send message from Form
        </Button>
        {/* <IButton
          variant="contained"
          color="success"
          size="large"
          type='submit'
        >Add message</IButton> */}
      </form>
    </>
  )
}
Form.propTypes = {
  addMessage: PropTypes.func
}

export default Form;