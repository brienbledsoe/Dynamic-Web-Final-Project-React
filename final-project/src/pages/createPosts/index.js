import React from 'react'
import CreatePostsForm from "../../components/CreatePostsForm"

export default function CreatePosts({user}) {
  return(
    <div>
    <h2 id="refreshWarning">Due to internal errors, you must refresh the page to make another post!</h2>
      <CreatePostsForm uid={user.uid ? user.uid : "Could not find user id."} />
    </div>

  );

}
