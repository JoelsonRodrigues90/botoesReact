import React from "react";
import {BsFacebook,BsLinkedin,BsGithub} from "react-icons/bs"


export default function App(){
  return(
    <div>
        <div className="container">
          <div className="icones">
            <button><BsFacebook className="face"/></button>
            <button ><BsLinkedin className="linkdin"/></button>
            <button ><BsGithub className="github"/></button>
          </div>
        </div> 
                
    </div>
  );
}