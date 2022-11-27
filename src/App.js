import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello World My name is <b>Quang Huy</b>
                </p>
            </header>
        </div>
    );
}

export default App;
