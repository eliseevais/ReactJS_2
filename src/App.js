import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import MessageList from './components/MessageList/MessageList';
import AUTHOR from './constants';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    console.log('newMessage', newMessage);
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'I am bot'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <>
      <h1>
        <div>
          Homework lesson_03
        </div>
        <div>
          Welcome to chat
        </div>
      </h1>
      <Form addMessage={addMessage} />
      <MessageList messages={messages} />
      {/* <ul>
        {messages.map((item, idx) => (
          <li key={`${idx}-${item}`}>[from "{item.author}" text: "{item.text}"]</li>
        ))}
      </ul>
      <input />
      <button>Send message form Form</button> */}
    </>
  );
}

export default App;
