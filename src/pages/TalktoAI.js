import React from "react";
import Pageconstant from "../components/Pageconstant";
import "../styles/TalktoAI.css";

function TalktoAI() {

    
    function CreateMessage() {
        console.log("maybe")

        
    }


    return (

        <div>
            <Pageconstant />
           
            <button style={{marginTop: "10%", marginLeft: "50%"}} onClick={CreateMessage}>Am I an AI?</button>
                
            
                

            


            
            
            

            
        </div>

    )



} export default TalktoAI