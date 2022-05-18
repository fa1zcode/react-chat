import React, { Component } from "react";

export default class ChatItem extends Component {
  render() {
    return <li>
                {this.props.title}
           </li>;
  }
}


