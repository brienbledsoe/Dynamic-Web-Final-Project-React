import React from 'react'
//this is the componenet that we're pushing here
import CreatePostsForm from "../../components/CreatePostsForm"

export default function CreatePosts({user}) {
  console.log("is this working in createPosts index.js file")
  return(
    <div>
      <div>Creating Post</div>
      <CreatePostsForm uid={user.uid ? user.uid : "Could not find user id."} />
    </div>

  );

}
