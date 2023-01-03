import React, { useState } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { store, persistor } from "./store";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ChatsPage from "./pages/ChatPages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import ChatList from "./components/ChatList/ChatList";
import Articles from './pages/Articles';
import { AboutWithConnect } from "./pages/AboutPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = (props) => {

  const [theme, setTheme] = useState(defaultContext.theme)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeContext.Provider value={{
            theme,
            toggleTheme
          }}>
            <Routes>
              <Route path="/" element={<Header />} >
                <Route index element={<MainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="about" element={<AboutWithConnect />} />
                <Route path="chats">
                  <Route index element={<ChatList />} />
                  <Route
                    path=":chatId"
                    element={<ChatsPage />}
                  />
                </Route>
                <Route path="articles" element={<Articles />} />
                <Route path="signIn" element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
              </Route>

              <Route path="*" element={<h2>404 Page not found</h2>} />
            </Routes>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;