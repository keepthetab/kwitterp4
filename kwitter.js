var firebaseConfig = {
  apiKey: "AIzaSyAoOhFeR_hWkM1C8NF5NQYWI9-Vol7gpR4",
  authDomain: "kwitter-984e1.firebaseapp.com",
  databaseURL: "https://kwitter-984e1-default-rtdb.firebaseio.com",
  projectId: "kwitter-984e1",
  storageBucket: "kwitter-984e1.appspot.com",
  messagingSenderId: "446908555929",
  appId: "1:446908555929:web:6708cc5122a1a198bc8e08",
  measurementId: "G-30JCR6HNL6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() 
{

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

