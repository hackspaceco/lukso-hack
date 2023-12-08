// Update the Message.js file
import React from 'react';

const Message = ({ role, content, isLoading }) => {
  const messageStyle = role === 'user' ? 'user' : 'assistant';

  return (
    <div className={`message ${messageStyle}`}>
      {/* {isLoading ? <span className="loading"></span> : null} */}
      {content}
    </div>
  );
};

export default Message;
