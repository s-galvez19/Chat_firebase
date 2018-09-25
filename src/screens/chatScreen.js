import $ from 'jquery';
import Message from '../message';


import {signOut} from '../session';

export default
function mountChatScreen() {
  let db = firebase.database();
  let messages = db.ref('messages/');
  
  $('#root').html(chatScreen());
  initChatScreenListeners(messages);
}

function chatScreen() {
  let container = document.createElement('div');

  container.id = 'chat-screen';
  container.classList.add('chat-screen');
  container.innerHTML = `
  <div class="chat-header"> 
  <div> Hi ${window.user.email.split('@')[0]}! </div>

  <div id="signout-btn" class="signout-btn">
    <svg height="30px" width="30px" aria-hidden="true" data-prefix="fal" data-icon="sign-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sign-out fa-w-16 fa-3x"><path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z" class=""></path></svg>
  </div>
</div>

<div id="chat-messages" class="chat-messages"></div>

<div class="chat-input-btn-container">
  <input type="text" class="chat-input-msg" id="chat-input-msg" />
  <div id="chat-send-btn" class="chat-send-btn"> 
    <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>
  </div>
</div>
`;

  return container;
}

function initChatScreenListeners(messages) {
  let sendMessage = () => {
    let date = new Date();
    let text = $("#chat-input-msg").val();

    messages.push({
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      date: date,
      text: text
    });

    $("#chat-input-msg").val('');
  }

  $('#signout-btn').on('click', signOut);

  $('#chat-send-btn').on('click', sendMessage);

  $('#chat-input-msg').keypress(function (e) {
    if (e.keyCode === 13) {
      sendMessage();
    }
  }).keyup(function () {
    // we are going to do some cool stuff here 
  });

  messages.on('value', function (snapshot) {
    let msgs = snapshot.val();

    $('#chat-messages').html('');

    let currentPerson = '';

    for (let mid in msgs) {
      let msg = msgs[mid];
      let showUsername = true;

      if (user.email === msg.email) {
        currentPerson = msg.email;
        showUsername = false;
      }
      else if (currentPerson === msg.email) {
        showUsername = false;
      }
      else {
        currentPerson = msg.email;
      }

      $('#chat-messages').append(Message(msg, showUsername));
    }
    
    scroll();
  });
}

function scroll() {
  let height = $('#chat-messages')[0].scrollHeight;
  $('#chat-messages').scrollTop(height);
}

