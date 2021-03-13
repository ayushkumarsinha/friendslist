import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/home.jsx";
import FriendList from "./components/friendList.jsx";

export default function App() {
  return (
    <>
      <header className="nav-bar">
        Friends List
      </header>
      <input className="search-field" type="text" placeholder="Enter your friend's name"/>
      <hr/>
      {/* <Home /> */}
      <FriendList />
    </>
  );
}
