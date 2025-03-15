// pages/ChatAndVQAPage.jsx
import React from 'react';
import ChatAndVQA from '../components/ChatAndVQA'; // adjust path as needed
import Navbar from '../components/Navbar'; // your existing navbar

const ChatAndVQAPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <ChatAndVQA />
      </div>
    </div>
  );
};

export default ChatAndVQAPage;