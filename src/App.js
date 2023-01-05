import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { store, persistor } from "./store"; 
import { firebaseAuth, messagesRef } from "./services/firebase"; 
import { auth } from "./store/profile/actions";
import { onValue } from "firebase/database";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ChatsPage from "./pages/ChatsPages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import ChatList from "./components/ChatList/ChatList";
import Articles from './pages/Articles';
import { AboutWithConnect } from "./pages/AboutPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { PrivateRoute } from "./utils/PrivateRoute";
import { PublicRoute } from "./utils/PublicRoute";

const App = (props) => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(defaultContext.theme);

  const [messagesDB, setMessageDB] = useState({});
  const [chats, setChats] = useState([]);

  // console.log('chats ищу ошибку', chats)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
   const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log('snapshot', data);

      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        messages: item[1].messageList
      }));

      setMessageDB(data);
      setChats(newChats);
      console.log('newChats', newChats);
      console.log('messagesDB', messagesDB);
      
    })
  }, []) 

  return (
    <>
      {/* <Provider store={store}> */}
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
                <Route path="chats" element={<PrivateRoute />} >
                  <Route
                    index
                    element={<ChatList chats={chats} messagesDB={messagesDB} />}
                  />
                  <Route
                    path=":chatId"
                    element={<ChatsPage chats={chats} messagesDB={messagesDB} />}
                  />
                </Route>
                <Route path="articles" element={<Articles />} />
                <Route path="signIn" element={<PublicRoute component={<SignIn />} />} />
                <Route path="signUp" element={<SignUp />} />
              </Route>

              <Route path="*" element={<h2>404 Page not found</h2>} />
            </Routes>
          </ThemeContext.Provider>
        </PersistGate>
      {/* </Provider> */}
    </>
  )
}

export default App;