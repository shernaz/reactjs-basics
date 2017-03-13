import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor () {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onGreet() {
        alert ("hello");
    }

    onChangeLinkName(newName) {
        this.setState ({
            homeLink: newName
        })
    }

    onChangeHomeMounted() {
        this.setState ({
            homeMounted: !this.state.homeMounted
        })
    }

	render () {
        //var user = {
        //    name: "Anna",
        //    hobbies: ["Sports", "Cooking", "gardeining"]
        //};

        let homeCmp = "";
        if(this.state.homeMounted) {
            homeCmp =  (
                    <Home
                    name={"Max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
            );
        }
		return  (
            <div className = "container">
                <div class="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div class="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div class="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(un)Mount home component</button>
                    </div>
                </div>
            </div>
        );
	}
}

render(<App/>, window.document.getElementById("app"));