import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import ChatsPage from "./pages/ChatPages/ChatsPage";
import ChatList from "./components/ChatList/ChatList";
import { nanoid } from 'nanoid';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { Provider } from "react-redux";
import store from "./store";


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
  const [theme, setTheme] = useState(defaultContext.theme)

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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{
          theme,
          toggleTheme
        }}>
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
        </ThemeContext.Provider>
      </Provider>

    </>
  )
}

export default App;