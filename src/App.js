import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import TalktoAI from "./pages/TalktoAI"

function App(){
    return (
        <Router>
            <div>
                
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/TalktoAI" component={TalktoAI} />
            </div>
            

        </Router>
        
    )
}
export default App