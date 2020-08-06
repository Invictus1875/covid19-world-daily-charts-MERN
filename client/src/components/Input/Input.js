import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <span role="img" aria-label="emoji">💬</span>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;