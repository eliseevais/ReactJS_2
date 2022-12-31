import React from "react";
import PropTypes from 'prop-types';

const MessageList = ({ messages }) => {

  console.log('messages', messages)

  return (
    <>
      <h1>MessageList</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {messages.author} : {message.text}
          </li>
        ))}
      </ul>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList;