//this is the componenet that we're pushing here
import UserProfileInfo  from "../../components/UserProfileComponents"
import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function UserProfile({user}) {
  const [userPosts,setUserPosts] = useState([]);
  const [errors, setErrors] = useState(false);
  const [error,isError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');


function queryUser(){
  axios.get(`https://dynamic-web-final-project.herokuapp.com/`)
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
  queryUser()

},[user]);



  return(
    <div>
      <h2 className="userprofilegreet">Work Less Study More!</h2>

      <div>
      <h1 className="userPosts">Recent Posts</h1>
      {userPosts.map(posts => {
      return <UserProfileInfo userPostsContent={posts} user={user}/>
      })}

      </div>
    </div>

  );

}
