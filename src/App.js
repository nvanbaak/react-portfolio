import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";

class App extends React.Component{
  
    state = {
        currentHome: true,
        // currentPortfolio: false
    }

    goToHome = () => {
        this.setState( {currentHome:true} )
    }

    goToPortfolio = () => {
        this.setState( {currentHome:false} )
    }

    render() {
        return (
            <Header 
                currentHome={this.state.currentHome}
                goToPortfolio={this.goToPortfolio}
                goToHome={this.goToHome}/>
            );
    }  
}

export default App;
