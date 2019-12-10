import React from 'react';

export default function PageWrapper({loggedIn,children}) {
  // const wrapperOpacity = clouds ? (clouds * 0.01) : 0;
  // const currentSky = "189, 195, 199"
  // const updatedCurrentSky = "246, 71, 71"
  if(loggedIn === "true"){
    return(
      <div style={{
        height: '100%',
        width: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: `rgba(137, 196, 244, 1)` /*Jordy Blue*/


      }}>
      {children}

      </div>


    )
  }if(loggedIn === "false"){
    return(
      <div style={{
        height: '100%',
        width: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: `rgba(197, 239, 247, 1)` /*Huming Bird*/


      }}>
      {children}


      </div>
    )
  }


}
