import React from "react";
import "../styles/Portfolioitems.css";
import deedDone from "./images/deedDone.jpg";
import gameFinder from "./images/GameFinder.png";
import wdScheduler from "./images/workDaySchedulerScreenshot.png";
import burgerpic from "./images/bushongBurgers.jpg";
import passwordgenpic from "./images/Password_Generation_Screenshot.png";
import budgetpic from "./images/budget.jpg"





function Portfolioitems(){

    return (

        <div className="containerForRow">
            <div className="headerForRow">
                <h1>Here are some of the things that I have made. </h1>
            </div>

            <div className="portfolioBody">

                <a href="https://ballinwithabudget.herokuapp.com/">
                    <img alt="Budget tracking app" src={budgetpic} width="400" height="300" class="thumbnail"></img>
                </a>

                <a href="https://deeddone.herokuapp.com/">
                    <img alt="Deed Done project" src={deedDone} width="400" height="300" class="thumbnail"></img>
                </a>

                <a href="https://danbushong.github.io/gameFinder/">
                    <img alt="Game Finder project" src={gameFinder} width="400" height="300" class="thumbnail"></img>
                </a>

                <a href="https://danbushong.github.io/dayPlanner/">
                    <img alt="Day Planner" src={wdScheduler} width="400" height="300" class="thumbnail"></img>
                </a>

                <a href="https://github.com/danbushong/burger">
                    <img alt="Burger project" src={burgerpic} width="400" height="300" class="thumbnail"></img>
                </a>

                <a href="https://danbushong.github.io/passwordGenerator/">
                    <img alt="Password Generator" src={passwordgenpic} width="400" height="300" class="thumbnail"></img>
                </a>


            </div>

        </div>
    )
}
export default Portfolioitems