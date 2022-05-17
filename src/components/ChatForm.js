import React, { Component } from "react";

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  titleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onSave = (event) => {
      event.preventDefault()
      this.props.add(this.state.title)
      this.setState({title:''})
  }

  render() {
    return (
      <form onSubmit={this.onSave}>
        <input type="text" name="chat" value={this.state.title} onChange={this.titleChange}></input>
        <button type="submit">kirim</button>
      </form>
    );
  }
}
