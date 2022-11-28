import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import Covid from "./views/Covid";
import Todo from "./views/Todo";
import Home from "./views/Home";
import Blog from "./views/Blog";
import BlogDetail from "./views/BlogDetail";
import CreateBlog from "./views/CreateBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/covid">
                        <Covid />
                    </Route>
                    <Route path="/todo">
                        <Todo />
                    </Route>
                    <Route path="/blog" exact>
                        <Blog />
                    </Route>
                    <Route path="/blog/:id" exact>
                        <BlogDetail />
                    </Route>
                    <Route path="/add-new-blog" exact>
                        <CreateBlog />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
