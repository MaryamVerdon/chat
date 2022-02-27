let socketClient = io();

/*
 * Emits an event to the server
 *
 * - The first parameter is the event name.
 * - The second parameter is the message content: it can be a number,
 *   a string or an object.
 */
socketClient.emit('hello', 'Olivier');

/*
 * Registers event listeners
 *
 * - The first parameter is the event name
 * - The second parameter is a callback function that processes
 *   the message content.
 */
socketClient.on('notification', (content) => {
  console.log(content);
});

socketClient.on('hello', (content) => {
  console.log(content);
});

//Demande de connexion 
let signin = document.forms.namedItem('signin');
if(signin) {
    signin.addEventListener("submit", (event) => {
        event.preventDefault();
        let nickname = signin.elements.namedItem("nickname").value;
        socketClient.emit('>signin', nickname);
        console.log('2' + nickname);
    });   
}

//confirmation de connexion
let send = document.forms.namedItem('send');
socketClient.on('<connected', (nickname) => {
  signin.hidden = true;
  let span = send.querySelector('span').innerHTML = nickname;
  send.hidden = false;
});

let divMsg = document.querySelector('div#display');
socketClient.on('<notification', (content) => {
  divMsg.innerHTML = content;
});

