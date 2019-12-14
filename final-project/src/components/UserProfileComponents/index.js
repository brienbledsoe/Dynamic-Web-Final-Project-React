import React from "react";
export default function UserProfileComponent({userPostsContent,key, user}) {

  return(

        <ul>
        <li>Name: {userPostsContent.name}</li>
        <li>University: {userPostsContent.university}</li>
        <li>{userPostsContent.name}'s question: {userPostsContent.userQuestion}</li>
        </ul>

  )

}
