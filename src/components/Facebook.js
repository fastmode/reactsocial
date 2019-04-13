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

    let messageArray = [];
    let wordsAPIPayload = []

    // Iterate through response messages(posts)
    response.posts.data.forEach(function (item) {
      // console.log(key);
      // console.log(item.message);
      if(item.message !== undefined) {
        messageArray.push(item.message);
        let words = item.message.split(' ');
        wordsAPIPayload.push(...words);
      }
    })

    console.log("messageArray", messageArray);
    console.log("wordsAPIPayload", wordsAPIPayload);

    // Add response to state
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      messageArray: messageArray
    })
  }

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    const { picture, name, email, messageArray} = this.state;

    if(this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={picture} alt={name} />
          <h2>Welcome {name}</h2>
          Email: {email}
          <h2>Messages</h2> 
          <div className="message">
            {messageArray.map((message, index) =>
              <p key={index}>{message}</p>
            )}
          </div>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="269599393990102"
          autoLoad={true}
          fields="name,email,picture,posts{message}"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
