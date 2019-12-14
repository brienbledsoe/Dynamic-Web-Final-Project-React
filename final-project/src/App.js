import './App.css';
import React, {useEffect,useState} from 'react';
import {Route,BrowserRouter as Router, Redirect} from 'react-router-dom'
import Header from "./components/Header";
import CreatePosts from "./pages/createPosts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pagewrapper from "./components/Pagewrapper";
import UserProfile from "./pages/UserProfile";
import UserFeed from "./pages/Feed";
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
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .catch(function(error){
    console.log('error', error);
  });
},[firebaseConfig])

useEffect(() => {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      setLoggedIn(true);
      setUser(user);
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

  return (

    <div className="App">
    <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router>

      <Route exact path="/">
        { loggedIn ? <Pagewrapper loggedIn="true"><UserProfile user={user}/></Pagewrapper> :  <Pagewrapper loggedIn="false"><Redirect to="login" /></Pagewrapper>}
      </Route>

        <Route exact path="/login" >
          { loggedIn ? <Redirect to="/"/> :  <Pagewrapper loggedIn="false"><Login loginFunction={loginFunction}/></Pagewrapper>}
        </Route>


        <Route exact path="/sign-up">
          { loggedIn ? <Redirect to="/"/>: <Pagewrapper loggedIn="false"><Signup signupFunction={signupFunction}/></Pagewrapper>}
        </Route>

        <Route exact path="/create-posts">
          {loggedIn ? <Pagewrapper loggedIn="true"><CreatePosts user={user}/></Pagewrapper> : <Pagewrapper loggedIn="false"><Login loginFunction={loginFunction}/></Pagewrapper>}
        </Route>

        <Route exact path="/feed">
          {loggedIn ? <Pagewrapper loggedIn="true"><UserFeed user={user}/></Pagewrapper> : <Pagewrapper loggedIn="false"><Login loginFunction={loginFunction}/></Pagewrapper>}
        </Route>

      </Router>
    </div>
  );
}

export default App;
