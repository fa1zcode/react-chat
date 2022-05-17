import React, { Component } from "react";
import ChatItem from "./ChatItem";

export default class ChatList extends Component {
  render() {
    const nodelist = this.props.chats.map(item => (
      <ChatItem title={item.title} />
    ));

    return <ol>
               {nodelist}
           </ol>;
  }
}
