import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../../App.css';
import Form from '../../components/Form/Form';
import MessageList from '../../components/MessageList/MessageList';
import ChatList from '../../components/ChatList/ChatList';
import { WithClasses } from '../../HOC/WithClasses';
import styles from './ChatPage.module.css';
import { useSelector } from 'react-redux';
import { selectMessage } from '../../store/messages/selectors';

const ChatPage = ({ messageDB, chats }) => {
  const { chatId } = useParams();
  // const messages = useSelector(selectMessage);

  const MessagesListWithClass = WithClasses(MessageList);

  const messages = Object.entries(messageDB.find((chat) => 
    chat.name === chatId).messageList);
  
  console.log('messages', messages)

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <h1>Welcome to chat</h1>
      <ChatList />
      <MessagesListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={styles.border}
      />
      <Form />
    </>
  );
}

export default ChatPage;
