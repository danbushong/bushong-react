import React from "react";
import "../styles/Aboutcard.css";
import headshot from "./images/headshot.png";


function Aboutcard() {
    return (

        <div className="containerForRow">

        
            <div className="row">

                <div className="col-md-12">

                    <heading className="aboutMeSection">

                        <h1>About me</h1>

                    </heading>
                    <div className="row">

                        <div className="col-md-12">



                            <img src={headshot} className="headshot" alt="headshot" />

                            



                            <p>
                                Hi there! My name is Dan Bushong, welcome to my page. I live in Austin, TX, with my
                                wife Sophia. We first met in San Diego, and then moved to Texas together in October 2020. I
                                enjoy Jiu Jitsu, playing Oculus, watching mma, listening to audiobooks, and programming. With 2020 being
                                as crazy as it was, I have been determined to pick up even more hobbies. One of my favorite
                                things is watching the process of how to get better at something. I am a firm believer that
                                practice and hard work eventually overtake skill, and the best way to get great at anything is
                                through constant practice.
                        </p>

                            <p>
                                Professionally, I have had a lot of experience in many different fields in a couple different
                                places. For example, I have lived in Maryland, Hawaii, California, and now Texas within the past
                                6 years. In those 6 years I have worked as a solar panel system designer, a licensed massage
                                therapist, a sales person, and finally the CTO and founder of a non-profit. Technology has been
                                the common theme in all of my work, I am proficient in JavaScript, HTML5, CSS, jQuery,
                                Responsive Design, Bootstrap, React.js, MongoDB, PHP frameworks like Laravel, CAD, Salesforce,
                                MySQL, Heroku, Security and Session Storage, User Authentication, and Python. I love working on
                                programming in my freetime as well.
                        </p>

                        </div>


                    </div>





                </div>

            </div>
        </div>





    )
}
export default Aboutcard


