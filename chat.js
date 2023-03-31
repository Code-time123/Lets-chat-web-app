var firebaseConfig = {
    apiKey: "AIzaSyBDs1SWxA-ZJ2ZFtmSoumzqVRBInep91fA",
    authDomain: "kwitter-cf270.firebaseapp.com",
    databaseURL: "https://kwitter-cf270-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf270",
    storageBucket: "kwitter-cf270.appspot.com",
    messagingSenderId: "471274459146",
    appId: "1:471274459146:web:ff2939998f913167280ff3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



