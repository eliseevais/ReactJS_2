import React from "react";
import PropTypes from 'prop-types';

function MessageList({ messages }) {

  return (
    <>
      <h1>MessageList</h1>
      <ul>
        {messages.map((item, index) => (
          <li key={`${index}-${item}`}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList;