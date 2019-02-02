import React, {Component} from 'react';

class Rewards extends Component {

    constructor(props){
        super(props);

        this.state = {
            renderRedirect : false,
        }
    }

    handleClick(c){
        if (c === "Best-Buy"){
            this.setState({
                renderRedirect : true,
            })
        }
        else {
            window.location = `https://www.${c}.ca`;
        }
    }
    
    render (){

        const companies = ["Apple", "Best-Buy", "Amazon", "Sportchek"];

        return (
            <div className="rewards-div">
                <h2>LOYALTY REWARDS</h2>
                <hr/>
                    
                <div>
                    {companies.map(c => (
                        <div className="reward-company-divs" onClick={() => this.handleClick(c)} key={c}>
                            <h3>{c}</h3>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Rewards;