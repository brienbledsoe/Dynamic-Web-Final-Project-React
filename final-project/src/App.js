// import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react';
import {Route,BrowserRouter as Router, Redirect} from 'react'
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import  * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDLyFPNwUo7NTVmil332XCKolfmIHRv9Fo",
  authDomain: "social-media-final.firebaseapp.com",
  databaseURL: "https://social-media-final.firebaseio.com",
  projectId: "social-media-final",
  storageBucket: "social-media-final.appspot.com",
  messagingSenderId: "1056094188664",
  appId: "1:1056094188664:web:05eef68c7186be85f3e98d",
  //measurementId: "G-measurement-id",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
  //initialize firebase
  if(!firebase.apps.length){
      firebase.initialize(firebaseConfig);
  }
  firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .Catch(function(error){
    console.log('error', error);
  });

},[firebaseConfig])

useEffect(() => {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      setLoggedIn(true);
      setUser(user);
      console.log("testing user one: ", user)
    }else{
      setLoggedIn(false);
      setUser({});
    }
  });
}, [])

function signupFunction(e){
  e.preventDefault();
  let email = e.currentTarget.createEmail.value;
  let password = e.currentTarget.createPassword.value;
  //HOW DOES HE KNOW TO WRITE LINE BELOW..
  //e.currentTarget.createPassword.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(function(response){
      setLoggedIn(true);
    })
    .catch(function(error){
      console.log('error',error);
    })
}

function loginFunction(e){
  e.preventDefault();
  let email = e.currentTarget.loginEmail.value;
  let password = e.currentTarget.loginPassword.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(function(response) {
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.log('error',error);
    });
}

function logoutFunction(){
  firebase.auth().signOut().then(function() {
    setLoggedIn(false);

  }).catch(function(error){
    console.log('error',error);
  });
}

console.log("testing user two: ", user);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router>
        <Route exact path="/">
          {loggedIn ? <UserProfile user={user}/> : <Redirect to="login" />}
        </Route>

        <Route exact path="/login">
          {loggedIn ? <Redirect to="/"/> : <Login loginfunction={loginFunction} />}
        </Route>

        <Route exact path="/sign-up">
          {loggedIn ? <Redirect to="/"/> : <Signup signupFunction={signupFunction} />}
        </Route>

      </Router>
    </div>
  );
}

export default App;
