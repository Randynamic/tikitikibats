import React, {Component} from 'react';
import fire from './fire';
import Uploader from './fileuploader';
import logo from './tikibats.jpg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {images: []}; // <- set up react state
    }

    componentWillMount() {
        /* Create reference to messages in Firebase Database */
        let messagesRef = fire.database().ref('images');
        messagesRef.on('child_added', snapshot => {
            let image = {href: snapshot.val(), id: snapshot.key};
            this.setState({images: [image].concat(this.state.images)});
        })
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Tiki bats</h1>
                </header>
                <ul>
                    {/* Render the list of messages */
                        this.state.images.map(image => <li key={image.id}><img className="batImage" src={image.href} alt="somtheing funny"/></li>)
                    }
                </ul>
                <footer>
                    <Uploader />
                </footer>
            </div>
        );
    }
}

export default App;
