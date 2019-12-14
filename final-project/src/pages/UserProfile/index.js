import UserProfileInfo  from "../../components/UserProfileComponents"
import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function UserProfile({user}) {
  const [userPosts,setUserPosts] = useState([]);
  const [errors, setErrors] = useState(false);
  const [error,isError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');

const myID = user.uid ? user.uid : "This iD is undefined"

function queryUser(){

  axios.get(`https://dynamic-web-final-project.herokuapp.com/posts/${myID}`)
  .then(function(res) {
    if(res.status !== 200){

        isError(true);
        setErrorMessage(`what is${res.status}: ${'Error'}`);
    }else{
      isError(false);
    }
    setUserPosts(res.data);
    console.log("printing response",res);
    return res
  })
  .catch(function(error) {
    console.log("Error: ",error)
    return error;
  });
}


useEffect(() =>{
  const userData = user.data ? user.data : "nothing is being printed";
  queryUser()

},[user]);



  return(
    <div>
      <h2 className="userprofilegreet">Work Less Study More!</h2>
      <div>
      <p className="userprofilegreet">Welcome {user.email ? user.email : "could not find email"}</p>
      </div>
      <div className="signInDate">
      <div className="signInBox1">
      <p>Last Signed In at {user.metadata ? user.metadata.lastSignInTime: " "}</p>
      </div>
      </div>

      <div>
      <h1 className="userPosts">Your Posts</h1>
      {userPosts.map(posts => {
      return <UserProfileInfo userPostsContent={posts} user={user}/>
      })}

      </div>
    </div>

  );

}
