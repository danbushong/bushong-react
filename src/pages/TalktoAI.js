import React, {useState} from "react";
import Pageconstant from "../components/Pageconstant";
import "../styles/TalktoAI.css";

function TalktoAI() {

    const [SecretMessage, setSecretMessage] = useState("Click the button and see what happens")

    

    
    function handleClick() {
        
        setSecretMessage("Ouch, stop poking me! (I am not a real AI)")

        
    }
    


    return (

        <div>
            <Pageconstant />

            <div style={{marginTop: "10%", textAlign: "center"}} >

            <button style={{ borderRadius: "25px", color: "white", backgroundColor: "#007bff" }} onClick={handleClick} >Am I an AI?</button>

            <div style={{marginTop: "3%" }}>{SecretMessage}</div>



            </div>
           
           

            
                
            
                

            


            
            
            

            
        </div>

    )



} export default TalktoAI