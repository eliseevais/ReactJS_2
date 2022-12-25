import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";

const ChatList = ({ onAddChat, chats }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddChat({
      id: nanoid(),
      name: value
    })
  }

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
          </li>
        ))}
      </ul>

      <h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Create chat</button>
      </form>
    </>
  )
}

export default ChatList;