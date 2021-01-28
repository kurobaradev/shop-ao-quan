import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import AboutusScreen from "./screens/AboutusScreen";
import BlogScreen from "./screens/BlogScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">Group 3</Link>
              <Link to="/">shop</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/admin">Admin</Link>
              
            </header>
            <main>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/aboutus" component={AboutusScreen} />
            <Route path="/blog" component={BlogScreen} />
            
            </main>
            <footer>Bản quyền thuộc về nhóm 3.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;