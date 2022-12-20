import React, { useState } from 'react';
import Button from '../UI/Button';
import AUTHOR from '../../constants';

function Form({ addMessage }) {
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
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button type='submit'>Send message from Form</Button>
      </form>
    </>
  )
}

export default Form;