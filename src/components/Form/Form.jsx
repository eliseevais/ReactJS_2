import React, { useState } from 'react';
import Button from '../UI/Button';
import AUTHOR from '../../constants';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addMessage, addMessageWithReply } from '../../store/messages/actions';
import { useParams } from 'react-router-dom';
// import IButton from '@mui/material/Button';
// import ITextField from '@mui/material/TextField';

const Form = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    //to do...
    // addMessage({
    //   author: AUTHOR.user,
    //   text: text
    // })

    dispatch(addMessageWithReply(chatId, {
      author: AUTHOR.user,
      text
    }));
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