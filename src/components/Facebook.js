import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  responseFacebook = response => {
    console.log(response);
    console.log(response.posts.data);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      messageArray: response.posts.data
    })
  }

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
    let messageArray = [];

    const messages = this.state.messageArray;

    console.log('Messages', messages);

    if(this.state.isLoggedIn) {
      fbContent = (
        <div style={{
          width: '400px',
          margin: 'auto',
          padding: '20px'
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
          <h2>Messages</h2> 
          
        </div>
      );
    } else {
      fbContent = (<FacebookLogin
        appId="269599393990102"
        autoLoad={true}
        fields="name,email,picture,posts{message}"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />)
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
