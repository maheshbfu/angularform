// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDL8QPFWq0kTjbeeYQZY4ACN_IofoG0gBs",
    authDomain: "bothofus-23465.firebaseapp.com",
    databaseURL: "https://bothofus-23465.firebaseio.com",
    projectId: "bothofus-23465",
    storageBucket: "bothofus-23465.appspot.com",
    messagingSenderId: "479765935332",
    appId: "1:479765935332:web:8e9ca1df6c68acf896a8f1",
    measurementId: "G-6B7H6LVLT2"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var poolname = getInputVal('poolname')
  var suppliers = getInputVal('suppliers');
  var pooldes = getInputVal('pooldes');
  var deadline = getInputVal('deadline');
    
  // Save message
  saveMessage(name,email, poolname,suppliers,pooldes,deadline);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email, poolname,suppliers,pooldes,deadline){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    poolname:poolname,
    suppliers:suppliers,
    pooldes:pooldes,
    deadline:deadline
  });
}