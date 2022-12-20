import React from "react";

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

export default MessageList;