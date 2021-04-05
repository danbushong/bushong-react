import React from "react";
import Pageconstant from "../components/Pageconstant";
import "../styles/Contact.css";

function Contact() {

    return (

        <div>
            <Pageconstant />
            

            <div className="card-body">
                <h1>Contact</h1>
                <p style={{color: "grey"}}>*pssstt... We all know that nobody actually uses contact forms. Just connect with me on LinkedIn, it's been fixed at the bottom of every page. </p>
                <form>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="name" className="form-control" id="exampleInputName" placeholder="Name"></input>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"></input>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputMessage">Message</label>
                        <input type="message" className="form-control" id="exampleInputMessage" placeholder="What would you like to tell me?"></input>
                    </div>



                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>
        </div>

    )



} export default Contact