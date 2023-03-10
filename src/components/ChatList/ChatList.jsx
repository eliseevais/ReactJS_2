import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/messages/actions";
import { selectChat } from "../../store/messages/selectors";

const ChatList = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const chats = useSelector(selectChat, 
    (prev, next) => prev.length === next.length);

  console.log('update chats', chats)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addChat(value));
  }

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>x</button>
          </li>
        ))}
      </ul>

      <h1>ChatList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Create chat</button>
      </form>
    </>
  )
}

export default ChatList;