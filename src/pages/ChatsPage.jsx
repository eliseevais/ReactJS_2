import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../App.css';
import Form from '../components/Form/Form';
import MessageList from '../components/MessageList/MessageList';
import AUTHOR from '../constants';
import ChatList from '../components/ChatList/ChatList';

const ChatPage = ({ onAddChat, onAddMessages, messages, chats }) => {
  // const [messages, setMessages] = useState([]);
  const { chatId } = useParams();

  useEffect(() => {
    if (chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        onAddMessages(chatId, {
          author: AUTHOR.bot,
          text: 'I am bot'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  const handleAddMessage = (message) => {
    if (chatId) {
      onAddMessages(chatId, message)
    }
  }

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>
        <div>
          Homework lesson_04
        </div>
        <div>
          Welcome to chat
        </div>
      </h1>
      <ChatList chats={chats} onAddChat={onAddChat} />
      <Form addMessage={handleAddMessage} />
      <MessageList messages={chatId ? messages[chatId] : []} />
    </>
  );
}

export default ChatPage;
