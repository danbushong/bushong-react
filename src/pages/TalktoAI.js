import React from "react";
import Pageconstant from "../components/Pageconstant";
import "../styles/TalktoAI.css";

function TalktoAI() {

    function onclick(){
        
        return(

            <div className="hidden message">Wow, your desk sure is messy! By the way, I am not a real AI.</div>
        )
    }



    return (

        <div>
            <Pageconstant />
           
            <button style={{margin: "auto"}}>Am I an AI</button>
                
            <div className="hidden message">Wow, your desk sure is messy! By the way, I am not a real AI.</div>
                

            


            
            
            

            
        </div>

    )



} export default TalktoAI