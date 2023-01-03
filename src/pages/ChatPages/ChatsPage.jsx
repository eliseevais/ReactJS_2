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

const ChatPage = () => {
  const { chatId } = useParams();
  const messages = useSelector(selectMessage);

  const MessagesListWithClass = WithClasses(MessageList);

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
