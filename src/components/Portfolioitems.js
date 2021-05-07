import React from "react";
import "../styles/Portfolioitems.css";
import deedDone from "./images/deedDone.jpg";
import gameFinder from "./images/gameFinder.png";
import wdScheduler from "./images/workdayScheduler.jpg";
import burgerpic from "./images/bushongBurgers.jpg";
import passwordgenpic from "./images/vpasswordGenerator.jpg";
import budgetpic from "./images/budget.jpg";
import nccss from "./images/nccss.jpg";
import almostveganimg from "./images/almostvegan.jpg";
import githubicon from "./images/githubicon.png";



function Portfolioitems() {

    return (

        <div className="containerForRow">


            <div className="portfolioBdy">
                
                <h1>Some Of My Non-Business Focused Projects</h1>
                <p style={{textAlign: "center", color: "grey"}}>Backends have been disconnected to avoid fees.</p>

                <div className="aProject" >
                    <a href="https://almost-vegan.herokuapp.com/">
                        <img alt="Almost Vegan app" src={almostveganimg} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Almost Vegan</div> 
                        <a href="https://github.com/danbushong/almostvegan">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>

                    </a>
                </div>

                <div className="aProject" >
                    <a href="https://novice-code-community.herokuapp.com/">
                        <img alt="NCC app" src={nccss} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">NCC</div>
                        <a href="https://github.com/tafseer-khan/novice_code_community">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>
                </div>

                <div className="aProject" >

                    <a href="https://danbushong.github.io/passwordGenerator/">
                        <img alt="Password Generator" src={passwordgenpic} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Password Generator</div>
                        <a href="https://github.com/danbushong/passwordGenerator">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>
                </div>


                <div className="aProject" >
                    <a href="https://ballinwithabudget.herokuapp.com/">
                        <img alt="Budget tracking app" src={budgetpic} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Ballin with a budget</div>
                        <a href="https://github.com/danbushong/zBudgetTracker">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>
                </div>

                <div className="aProject" >

                    <a href="https://deeddone.herokuapp.com/">
                        <img alt="Deed Done project" src={deedDone} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Deed Done</div>
                        <a href="https://github.com/danbushong/project2">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>

                </div>

                <div className="aProject" >

                    <a href="https://danbushong.github.io/gameFinder/">
                        <img alt="Game Finder project" src={gameFinder} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">gameFinder</div>
                        <a href="https://github.com/danbushong/gameFinder">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>

                </div>

                <div className="aProject" >

                    <a href="https://danbushong.github.io/dayPlanner/">
                        <img alt="Day Planner" src={wdScheduler} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Day Planner</div>
                        <a href="https://github.com/danbushong/dayPlanner">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>

                </div>

                <div className="aProject" >

                    <a href="https://bushongburger.herokuapp.com/">
                        <img alt="Burger project" src={burgerpic} width="100%" height="200px" className="thumbnail"></img>
                        <div className="projectTitle">Burger App</div>
                        <a href="https://github.com/danbushong/burger">
                            <img alt="github icon" src={githubicon} heigh="20%" width="20%" style={{float: "right"}}/>
                        </a>
                    </a>

                </div>

                

                


            </div>
        </div>
        

        
    )
}
export default Portfolioitems