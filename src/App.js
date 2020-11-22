import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css"

class App extends React.Component{
  
    state = {
        currentHome: true,
        homeClass:"nav-item active",
        portfolioClass:"nav-item"
        // currentPortfolio: false
    }

    goToHome = () => {
        this.setState( {
            currentHome:true,
            homeClass:"nav-item active",
            portfolioClass:"nav-item"
        } );
    }

    goToPortfolio = () => {
        this.setState( {
            currentHome:false,
            homeClass:"nav-item",
            portfolioClass:"nav-item active"
        } );
    }

    render() {
        return (
            <>
            <Header 
                currentHome={this.state.currentHome}
                homeClass={this.state.homeClass}
                portfolioClass={this.state.portfolioClass}
                goToPortfolio={this.goToPortfolio}
                goToHome={this.goToHome}/>
                
            <Body currentHome={this.state.currentHome}/>
            </>
            );
    }  
}

export default App;
