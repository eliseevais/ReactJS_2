import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import ChatsPage from "./pages/ChatsPage";
import ChatList from "./components/ChatList/ChatList";
import { nanoid } from 'nanoid';

const defaultMessages = {
  default: [
    {
      author: 'user',
      text: 'one text',
    },
    {
      author: 'user',
      text: 'two text',
    }
  ]
}

const App = (props) => {

  const [messages, setMessages] = useState(defaultMessages)

  const chats = Object.keys(messages).map((chat) => ({
    id: nanoid(),
    name: chat
  }))

  const onAddChat = (newChat) => {
    console.log('newChat', newChat);
    setMessages({
      ...messages,
      [newChat.name]: []
    })
  }

  const onAddMessages = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage]
    })
  }

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chats">
            <Route index element={<ChatList chats={chats} onAddChat={onAddChat} />} />
            <Route
              path=":chatId"
              element={<ChatsPage chats={chats}
                messages={messages}
                onAddMessages={onAddMessages}
                onAddChat={onAddChat} />}
            />
          </Route>
        </Route>

        <Route path="*" element={<h2>404 Page not found</h2>} />
      </Routes>
    </>
  )
}

export default App;