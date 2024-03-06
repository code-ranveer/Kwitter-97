

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAoA5QcPbH0wiKGDqPxz1o-OPoOko65pXU",
  authDomain: "ranveer-707f3.firebaseapp.com",
  databaseURL: "https://ranveer-707f3-default-rtdb.firebaseio.com",
  projectId: "ranveer-707f3",
  storageBucket: "ranveer-707f3.appspot.com",
  messagingSenderId: "83341812381",
  appId: "1:83341812381:web:a7e7594de0786ccc3c6a74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - ", Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  })

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter-page.html";
}

function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("Room name", name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter_page.html";
}