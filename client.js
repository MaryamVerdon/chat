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
    });   
}

//confirmation de connexion
let send = document.forms.namedItem('send');
socketClient.on('<connected', (nickname) => {
  signin.hidden = true;
  let span = send.querySelector('span').innerHTML = nickname;
  send.hidden = false;
  if(!toast.hidden)
    toast.classList.add("hidden");

});

let divDisplay = document.querySelector('div#display');
socketClient.on('<notification', (content) => {
  divDisplay.innerHTML += `<i class="text-gray">` + content + `</i><br>`;
});

//echec de connexion
let toast = document.querySelector("div.toast-error");
socketClient.on('<error', (nickname) => {
  toast.innerHTML = nickname;
  toast.classList.remove("hidden");

});

//envoie/réception de messages

send.addEventListener("submit", (event) => {
  event.preventDefault(); 
  let msg = send.elements.namedItem('message').value;
  socketClient.emit('>message', msg);
  //send.elements.namedItem('message').innerHTML = "";  
  document.getElementById("message").value = "";
  
});


socketClient.on('<message', (msg) => {
  let date = new Date();
  const options = { day: 'numeric', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
  divDisplay.innerHTML  += `<br> <span class="label label-rounded label-primary">` 
                              + msg.sender + 
                           `</span> <span class="text-gray">` 
                                + date.toLocaleDateString('fr-CEST', options) +
                            `</span> <br>` + msg.text + `<br>`; 
  
});

socketClient.on('<service-message', (message) => {
  divDisplay.innerHTML += `<i class="text-gray">` + message.text + `</i><br>`;
});


