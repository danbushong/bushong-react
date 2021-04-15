import React from "react";
import "../styles/Portfolioitems.css";
import deedDone from "./images/deedDone.jpg";
import gameFinder from "./images/gameFinder.png";
import wdScheduler from "./images/workDaySchedulerScreenshot.png";
import burgerpic from "./images/bushongBurgers.jpg";
import passwordgenpic from "./images/Password_Generation_Screenshot.png";
import budgetpic from "./images/budget.jpg"
import nccss from "./images/nccss.jpg"
import almostveganimg from "./images/almostvegan.jpg"
import funny from "./images/funny.jpg"





function Portfolioitems() {

    return (

        <div className="containerForRow">


            <div className="portfolioBdy">
                
                <h1>Some Of My Projects</h1>

                <div className="aProject" >
                    <a href="https://almost-vegan.herokuapp.com/">
                        <img alt="Almost Vegan app" src={almostveganimg} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Almost Vegan</div>

                    </a>
                </div>

                <div className="aProject" >
                    <a href="https://novice-code-community.herokuapp.com/">
                        <img alt="NCC app" src={nccss} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">NCC</div>
                    </a>
                </div>

                <div className="aProject" >

                    <a href="https://danbushong.github.io/passwordGenerator/">
                        <img alt="Password Generator" src={passwordgenpic} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Password Generator</div>
                    </a>
                </div>


                <div className="aProject" >
                    <a href="https://ballinwithabudget.herokuapp.com/">
                        <img alt="Budget tracking app" src={budgetpic} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Ballin with a budget</div>
                    </a>
                </div>

                <div className="aProject" >

                    <a href="https://deeddone.herokuapp.com/">
                        <img alt="Deed Done project" src={deedDone} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Deed Done</div>
                    </a>

                </div>

                <div className="aProject" >

                    <a href="https://danbushong.github.io/gameFinder/">
                        <img alt="Game Finder project" src={gameFinder} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">gameFinder</div>
                    </a>

                </div>

                <div className="aProject" >

                    <a href="https://danbushong.github.io/dayPlanner/">
                        <img alt="Day Planner" src={wdScheduler} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Day Planner</div>
                    </a>

                </div>

                <div className="aProject" >

                    <a href="https://github.com/danbushong/burger">
                        <img alt="Burger project" src={burgerpic} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Burger App</div>
                    </a>

                </div>

                

                <div className="aProject" >

                    <a href="https://danbushong.github.io/funny/">
                        <img alt="Scary" src={funny} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">April Fools Prank. Feel free to use. It works best on desktop. </div>
                    </a>

                </div>


            </div>
        </div>
        

        
    )
}
export default Portfolioitems