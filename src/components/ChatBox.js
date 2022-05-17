import React, { Component } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    };
  }

  addChat = (title) => {
    this.setState({ chats: [...this.state.chats, { title }] });
  };

  render() {
    return (
      <div>
        <ChatForm add={this.addChat} />
        <ChatList chats={this.state.chats} />
      </div>
    );
  }
}
