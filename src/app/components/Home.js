import React from "react";


export class Home extends React.Component {

    constructor(props) {
        super();
        //this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
            //homeLink: "Changed Link"
        };
        setTimeout(() => {
            this.setState ({
                status: 1
            });
        },3000);
    }

    onMakeOlder() {
        //this.age += 3;
        //console.log(this.age);

        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState ({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>this is a new component !!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older !!</button>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-danger">Make me older !!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};






//export class Home extends React.Component {
//    render() {
//        console.log(this.props);
//
//        let content = "";
//        if (true) {
//            content = <p>Hello its me !!</p>
//        }
//
//        return (
//            <div>
//                <p>this is a new component !!</p>
//                { content }
//                { "String will also work!!"}
//                { 5 == 2 ? "Yes": "No"}
//                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
//                <p>user object => Name: {this.props.user.name}</p>
//                <div>
//                    <h4>Hobbies</h4>
//                    <ul>
//                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
//                    </ul>
//                </div>
//                <hr/>
//                {this.props.children}
//            </div>
//        );
//    }
//}
//
//Home.PropTypes = {
//    name: React.PropTypes.string,
//    age: React.PropTypes.number,
//    user: React.PropTypes.object,
//    children: React.PropTypes.element.isRequired
//};